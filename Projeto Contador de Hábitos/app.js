function addHabit() {
    const habitInput = document.getElementById('habitInput');
    const habitList = document.getElementById('habitList');
   
    if (habitInput.value.trim() !== "") {
      const li = document.createElement('li');
      li.classList.add('habit');
     
      li.innerHTML = `
        <span>${habitInput.value}</span>
        <div>
          <button onclick="markHabit('${habitInput.value}', 'completed')">Feito</button>
          <button onclick="markHabit('${habitInput.value}', 'missed')">Não Feito</button>
          <span class="status" id="${habitInput.value}-status">Status: Não Realizado</span>
        </div>
      `;
      habitList.appendChild(li);
     
      habitInput.value = "";
    }
  }
 
  function markHabit(habit, status) {
    const statusElement = document.getElementById(`${habit}-status`);
   
    if (status === 'completed') {
      statusElement.textContent = `Status: Realizado`;
      statusElement.style.color = '#4CAF50';
    } else {
      statusElement.textContent = `Status: Não Realizado`;
      statusElement.style.color = '#f44336';
    }
  }

