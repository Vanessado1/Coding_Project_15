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
            riskDashboard.removeChild(riskCard);
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
// Test Cases 
addRiskItem("Cybersecurity Threat", "High", "IT"); // should be red 
addRiskItem("HR Compliance Issue", "Low", "Human Resources"); // should be green 
addRiskItem("Market Fluctuations", "High", "Finance");// click resolve to remove mark 
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");