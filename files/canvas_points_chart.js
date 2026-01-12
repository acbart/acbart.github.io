$.getMultiScripts=function(arr,path){function executeInOrder(scr,code,resolve){
    scr==arr[0]?(arr.shift(),eval(code),resolve(),console.log("executed",scr)):
    setTimeout(function(){executeInOrder(scr,code,resolve)},50)}
    var _arr=$.map(arr,function(e){return new Promise(r=>{jQuery.ajax({
        type:"GET",url:(path||"")+e,dataType:"text",success:function(c){
            console.log("loaded  ",e),executeInOrder(e,c,r)},cache:!0})})});
            return _arr.push($.Deferred(function(e){$(e.resolve)})),
            $.when.apply($,_arr)};

function median(n){if(0===n.length)throw new Error("No inputs");n.sort(function(n,r){return n-r});var r=Math.floor(n.length/2);return n.length%2?n[r]:(n[r-1]+n[r])/2}

(async ()=>{
    // Load ChartJS
    async function loadLibraries() {
        return $.getMultiScripts([
            "moment@^2",
            "chart.js@^3",
            "chartjs-adapter-moment@^1"
        ], 'https://cdn.jsdelivr.net/npm/');
    }

    function makeEmptyPlot(data, label) {
        data[label] = {times: [], values: [], labels: []};
    }
    const getStudent = () => $("#select-student").val();
    const submissionByDueDate = (a, b) => (
    a.assignment.dueAt && b.assignment.dueAt &&
    a.assignment.dueAt.localeCompare(b.assignment.dueAt));
    const submissionByDate = (a, b) => (a.submittedAt.localeCompare(b.submittedAt));
    const assignmentsByDate = (a, b) => (a.dueAt.localeCompare(b.dueAt));

    function crunchNumbers(courseData, assignments, submissions, users) {
        const crunched = {points: {},
            endAt: courseData.end_at,
            startAt: courseData.start_at};
        const points = crunched.points;
        if (courseData.end_at == null) {
            // Also check for late submitted assignments
            lastDue = Object.values(assignments).map(a => a.dueAt).filter(Boolean).sort().at(-1);
            lastSub = Object.values(submissions).map(s => s.submittedAt).filter(Boolean).sort().at(-1);
            crunched.endAt = lastDue == null ? lastSub :
                             lastSub == null ? lastDue :
                             lastDue < lastSub ? lastDue : lastSub;
        }
        // Assignment generics
        makeEmptyPlot(points, 'possible');
        possibleAssignments = Object.values(assignments).map(a =>
            (a.dueAt != null ? a : {...a, dueAt: crunched.endAt})
        ).sort(assignmentsByDate);
        crunched.assignments = possibleAssignments;
        let runningSum = 0;
        points.possible.values = [];
        let seenDates = {};
        possibleAssignments.forEach(a => {
            const dueAt = moment(a.dueAt).format('YYYY-MM-DD');
            console.log(a)
            runningSum += a.pointsPossible * a.assignmentGroup.groupWeight;
            if (dueAt in seenDates) {
                points.possible.values[seenDates[dueAt]].y = runningSum;
            } else {
                seenDates[dueAt] = points.possible.values.length;
                points.possible.values.push({x: dueAt, y: runningSum});
            }
        });
        points.possible.labels = possibleAssignments.map(a => a.name);
        points.possible.times = possibleAssignments.map(a => moment(a.dueAt));
        // Assignment Data
        
        // Median student
        makeEmptyPlot(points, 'median');
        let latestDate = crunched.startAt;
        let scoresOnDate = {};
        let studentGrades = Object.fromEntries(Object.values(users).map(u => [u.id, 0]));
        Object.values(submissions).map(sub=>
            (sub.submittedAt != null ? sub : {...sub, submittedAt: crunched.endAt})
        ).sort(submissionByDate).forEach(sub => {
            const dueAt = moment(sub.submittedAt).format('YYYY-MM-DD');
            studentGrades[sub.user.id] += sub.score * sub.assignment.assignmentGroup.groupWeight;
            scoresOnDate[dueAt] = {...studentGrades};
        });
        crunched.points.median.values = Object.entries(scoresOnDate).map(([dueAt, grades]) => {
            return {x: dueAt, y: median(Object.values(grades))};
        });
        //console.log(crunched.points.median.values);
        // Student specific
        makeEmptyPlot(points, 'student');
        makeEmptyPlot(points, 'unscored');
        student = users[getStudent()];
        if (student) {
            const seenAssignments = {};
            studentSubmissions = Object.values(submissions).filter(
                sub => sub.user.id === student.id
            ).map(sub=>
                (sub.submittedAt != null ? sub : {...sub, submittedAt: crunched.endAt})
            ).sort(submissionByDate);
            studentSubmissions.forEach(sub => {
                seenAssignments[sub.assignment.id] = true;
            });
            scored = studentSubmissions.filter(sub => sub.score != null);
            unscored = studentSubmissions.filter(sub => sub.score == null);
            runningSum = 0;
            points.student.values = scored.map(sub => {
                runningSum += (sub.score || 0) *  sub.assignment.assignmentGroup.groupWeight;
                return {x: sub.submittedAt, y: runningSum};
            });
            points.student.labels = scored.map(sub =>
                sub.assignment.name);
            points.unscored.values = [
            ...unscored.map(sub => {
                runningSum += (sub.assignment.pointsPossible || 0) * sub.assignment.assignmentGroup.groupWeight;
                return {x: sub.assignment.dueAt || crunched.endAt, y: runningSum};
            }), ...(Object.values(assignments).filter(a => {
                return !(a.id in seenAssignments);
            }).map(a => {
                runningSum += a.pointsPossible *  a.assignmentGroup.groupWeight;
                return {x: a.dueAt || crunched.endAt, y: runningSum};
            }))];
        }
        
        console.log(crunched)
        return crunched;
    }

    function makePointsTrend(target, courseData, crunched, assignments, submissions, users) {
        const {start_at} = courseData;
        // Crunch Data for users and course
        // Plot
        if (typeof theChart != "undefined") {
            theChart.clear();
            theChart.destroy();
        }
        theChart = new Chart(target, {
            type: 'line',
            data: {
                //labels: crunched.points.student.times,
                datasets: [
                    {label: "Running Score",
                    data: crunched.points.student.values,
                    fill: false, borderColor: 'blue',
                    radius: 2,
                    borderWidth: 1,
                    },
                    /*{label: "Still Unscored",
                    data: crunched.points.student.unscored,
                    fill: false, borderColor: 'red',
                    radius: 2,
                    borderWidth: 1,
                    },*/
                    {label: "Points Possible",
                    data: crunched.points.possible.values,
                    borderWidth: 1,
                    borderColor: 'black',
                    borderDash: [5, 5],
                    radius: 2,
                    pointStyle: 'triangle',
                    fill: false},
                    {label: "Median Student",
                    data: crunched.points.median.values,
                    borderWidth: 1,
                    borderColor: 'green',
                    radius: 1,
                    fill: false}
                ]
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        min: moment(start_at),
                        max: moment(crunched.endAt),
                        time: {
                            unit: 'week'
                        }
                    },
                    y: {
                        beginsAtZero: true
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (tti) => {
                                console.log(tti);
                                console.log(crunched.points.student.labels[tti.dataIndex])
                                return crunched.points.student.labels[tti.dataIndex];
                            }
                        }
                    }
                }
            }
        });
    }

    function makeStatsTable(target, courseData, crunched, assignments, submissions, users) {
        crunched.assignments.map(a => {
            $(target).append(`<tr>
                <td>${a.name}</td>
                <td>${a.pointsPossible}</td>
            </tr>`);
        })
    }

    const mainBody = `
    <div>
        <div>Status: <span id='status'/></div>
        <label>Students:
            <select id='select-student'>
                <option value=""></option>
            </select></label>
    </div>
    <div>
        <strong>Graph</strong>
        <canvas id='points-trend'></canvas>
    </div>
    <div>
        <strong>Statistics</strong>
        <table id='student-stats' class='table table-bordered table-condensed table-striped'>
            <tr>
                <th>Assignment</th>
                <th>Possible</th>
            </tr>
        </table>
    </div>
    `;

    const course = ENV.context_asset_string;
    const courseId = course.split("_")[1];
    const base = ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN;
    const api = `${base}/api/v1`;
    const courseUrl = `${api}/courses/${courseId}`;
    const noApiCourseUrl = `${base}/courses/${courseId}`;

    if (typeof(CACHE) == "undefined") {
        CACHE = {};
    }

    const courseData = await(await fetch(courseUrl)).json();
    console.log(courseData);

    async function graphqlQuery(name, query, accessor) {
        async function actualQuery(current, attempts, progress) {
            updateStatus(`Loading ${name} (#${progress})`);
            try {
                const result = await asyncAjax({
                    url: `${ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN}/api/graphql`,
                    data: JSON.stringify({
                        variables: {startAt: current}, 
                        operationName: 'GetSubmissions',
                        'query': query
                    }),
                    contentType: 'application/json',
                    type: 'POST',
                });
                let nodes = accessor(result).nodes;
                let endResult = [];
                for (let node of nodes) {
                  endResult.push(node);
                }
                let pageInfo = accessor(result).pageInfo;
                if (pageInfo.hasNextPage) {
                   let rest = await actualQuery(pageInfo.endCursor, 0, progress+1);
                   return [...endResult, ...rest];
                } else {
                    return endResult;
                }
           } catch (reason) {
               if (attempts < 3) {
                   console.error(reason);
                   console.log("Oops, I died. I'll try again in 4 seconds.");
                   setTimeout(() => {
                       console.log("I'm trying again now!");
                       return actualQuery(current, attempts+1, progress);
                   }, 4000);
               } else {
                   console.error("Oh no, I died too many times. Giving up.");
                   return [];
               }
           }
        }
        if (name in CACHE) {
            return CACHE[name];
        } else {
            let result= actualQuery("", 0, 0);
            CACHE[name] = result;
            return result;
        }
    }

    async function loadSubmissions() {
        return graphqlQuery("Submissions", SUBMISSIONS_QUERY,
            (result => result.data.course.assignmentsConnection));
    }

    function updateStatus(text) {
        $("#status").html(text);
    }

    function startDialog(title, body) {
        if ($('#dialog').length == 0) {
            $(document.body).append('<div title="' + title +
                '" id="dialog"></div>');
        }
        $("#dialog").dialog({
            autoOpen: false,
            show: "blind",
            hide: "explode",
            width: '80%',
            height: document.documentElement.clientHeight - 100
        });
        $("#dialog").dialog("open");
        $('#dialog').html(body);
    }

    const SUBMISSIONS_QUERY = `
    query GetSubmissions($startAt:String) {
      course(id: "${courseId}") {
        assignmentsConnection(first:10, after:$startAt) {
          nodes {
            submissionsConnection {
              nodes {
                _id
                attempt
                score
                user {
                  _id
                  name
                }
                submittedAt
                gradedAt
                gradingStatus
              }
            }
            _id
            name
            pointsPossible
            dueAt(applyOverrides: false)
            assignmentGroup {
              groupWeight
              name
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
    `

    function asyncAjax(request){
        return new Promise(function(resolve, reject) {
                $.ajax({ ...request,
                    success: function(data) {
                        resolve(data) // Resolve promise and when success
                    },
                    error: function(err) {
                        reject(err) // Reject the promise and go to catch()
                    }
                });
        });
    }

    startDialog("Stats", mainBody);
    await loadLibraries();
    let raw = await loadSubmissions("", 0, 0);
    let assignments = Object.fromEntries(raw.map(a => ([a._id, {
        dueAt: a.dueAt, name: a.name, pointsPossible: a.pointsPossible,
        id: a._id, assignmentGroup: a.assignmentGroup
    }])));
    let users = {};
    let submissions = {};
    raw.forEach(a => {
        a.submissionsConnection.nodes.forEach(s => {
            users[s.user._id] = {id: s.user._id, name: s.user.name};
            submissions[s._id] = {
                id: s._id, attempt: s.attempt,
                gradedAt: s.gradedAt, gradingStatus: s.gradingStatus,
                score: s.score, submittedAt: s.submittedAt,
                user: users[s.user._id], assignment: assignments[a._id]
            };
        });
    });
    let crunched = crunchNumbers(courseData, assignments, submissions, users);
    makePointsTrend('points-trend', courseData, crunched, assignments, submissions, users);
    makeStatsTable('#student-stats', courseData, crunched, assignments, submissions, users);
    console.log(Object.values(submissions)[0]);
    console.log(Object.values(assignments)[0]);
    console.log(Object.values(users)[0]);
    Object.values(users).forEach(u => $("#select-student")[0].add(new Option(u.name, u.id)));
    $("#select-student").change(() => {
        crunched = crunchNumbers(courseData, assignments, submissions, users);
        makePointsTrend('points-trend', courseData, crunched, assignments, submissions, users);
        makeStatsTable('student-stats', courseData, crunched, assignments, submissions, users);
        console.log("Finished again!");
    });
    console.log("ALL DONE");
})();
