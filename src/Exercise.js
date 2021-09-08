class Exercise {

    constructor({id, name, reps, workout_id}) {
        this.id = id;
        this.name = name; 
        this.reps = reps; 
        this.workout_id = workout_id;

    }


    renderExercise = () => {
            //gets the element by the ID from index.HTML
            // const exerciseList = document.getElementById('exercise-list')
            //adds exercise to the list
            const exerciseInfo = document.createElement('div')
            // exerciseList.classList.add('exercise')

            const exerciseName = document.createElement('h2');
            //creates an H2 element for name
            exerciseName.innerText = this.name;
            //adds the name to innertext
            
            const exerciseReps = document.createElement('h2');
            exerciseReps.innerText = this.reps;
        
            exerciseInfo.appendChild(exerciseName)
            //appends the name and reps to the exercise list
            exerciseInfo.appendChild(exerciseReps)

            const deleteButton = document.createElement('button')
            deleteButton.innerText = "Delete"

            deleteButton.id = this.id
            // debugger
            exerciseInfo.appendChild(deleteButton)
            // exerciseList.appendChild(exerciseInfo)


            deleteButton.addEventListener('click', function (event) {
                //two arguments - the event, which is the click, and the callback method
                event.preventDefault()
                //prevent the browser from making a POST request and refreshing
                console.log(event.target.id, "event target")

            const configObj = {
                method: 'DELETE',
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
                }
            }
        

            fetch(`http://localhost:3000/exercises/${this.id}`, configObj)
            .then(json => alert(json.message)) 

            exerciseInfo.remove()

        })

            return exerciseInfo
            //returns the exercise list

            
      
      };

    }


