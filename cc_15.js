// Task 1 
document.addEventListener('DOMContentLoaded', (event) =>{
    const riskDashboard = document.getElementById('riskDashboard');
    console.log("Risk Dashboard Loaded");
});

// Task 2 
// created a new add risk item function
function addRiskItem(riskName, riskLevel, department) {
    // create a new div element 
    const riskCard = document.createElement('div');
    riskCard.className = 'riskCard';

    // apply background color to risk levels 
    switch (riskLevel) {
        case 'Low':
            riskCard.classList.add('lowRisk');
            break;
        case 'Medium':
            riskCard.classList.add('mediumRisk');
            break;
        case 'High':
            riskCard.classList.add('highRisk');
            break;
    }

    // add risk details to card
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
        <button class="resolveButton">Resolve</button>`;// created a resolve button
    // append risk card to risk dashboard 
    riskDashboard.appendChild(riskCard);

    // Task 3
    // add event listener to resolve button    
    const resolveButton = riskCard.querySelector('.resolveButton');
        resolveButton.addEventListener('click', () => {
            event.stopPropagation(); // prevent propagation
            riskDashboard.removeChild(riskCard);
        });
    // prevent clicks inside the risk card 
    riskCard.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}
// handles form submittions 
const riskForm = document.getElementById('riskForm');
    riskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const riskName = 
        document.getElementById('riskInput').value;
        document.getElementById('riskLevel').value;
        document.getElementById('department').value;

        addRiskItem(riskName, riskLevel, department);

        // clears risk form
        riskForm.reset();
    });
// Task 5 
// function to increase risk levels 
function increaseRiskLevels() {
    const riskCards = document.querySelectorAll('.riskCard');
    riskCards.forEach(card => {
    const riskLevelElement = card.querySelector('.riskLevel');
        let currentLevel = riskLevelElement.textContent.split(': ')[1];
        let newLevel;

        switch(currentLevel) {
            case 'Low':
                newLevel = 'Medium';
                card.classList.remove('lowRisk');
                card.classList.add('mediumRisk');
                break;
            case 'Medium':
                newLevel ='High';
                card.classList.remove('mediumRisk');
                card.classList.add('highRisk');
                break;
            case 'High':
                newLevel ='High';
                break;
        }
        riskLevelElement.textContent = `Risk Level: ${newLevel}`;
    });
}
// add event listener to increase risk levels button 
const increaseButton = document.getElementById('increaseRiskLevels');
    increaseButton.addEventListener('click', increaseRiskLevels);
    
// Test Cases 
addRiskItem("Cybersecurity Threat", "High", "IT"); // should be red 
addRiskItem("HR Compliance Issue", "Low", "Human Resources"); // should be green 
addRiskItem("Market Fluctuations", "High", "Finance");// click resolve to remove mark 
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");