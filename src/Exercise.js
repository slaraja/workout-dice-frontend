class Exercise {

    constructor({id, name, reps, workout_id}) {
        this.id = id;
        this.name = name; 
        this.reps = reps; 
        this.workout_id = workout_id;

    }


    renderExercise = () => {
            //gets the element by the ID from index.HTML
            const exerciseList = document.getElementById('exercise-list')
            //adds exercise to the list
            exerciseList.classList.add('exercise')

            const exerciseName = document.createElement('h2');
            //creates an H2 element for name
            exerciseName.innerText = this.name;
            //adds the name to innertext
            
            const exerciseReps = document.createElement('h2');
            exerciseReps.innerText = this.reps;
        
            exerciseList.appendChild(exerciseName)
            //appends the name and reps to the exercise list
            exerciseList.appendChild(exerciseReps)

            return exerciseList
            //returns the exercise list
            
      
      };

    }


