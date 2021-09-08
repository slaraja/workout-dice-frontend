class Exercise {

    constructor({id, name, reps, workout_id}) {
        this.id = id;
        this.name = name; 
        this.reps = reps; 
        this.workout_id = workout_id;
    }

    renderExercise = () => {
            const exerciseInfo = document.createElement('div')

            const exerciseName = document.createElement('li');
            exerciseName.innerText = this.name;
            
            const exerciseReps = document.createElement('p');
            exerciseReps.innerText = this.reps;
        
            exerciseInfo.appendChild(exerciseName)
            exerciseInfo.appendChild(exerciseReps)

            const deleteButton = document.createElement('button')
            deleteButton.innerText = "Delete"

            deleteButton.id = this.id
       
            exerciseInfo.appendChild(deleteButton)

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
      
      };

    }


