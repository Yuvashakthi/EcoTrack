const ctx = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Good Products', 'Schemes', 'Programs', 'Community Involvement'],
        datasets: [{
            label: 'User Engagement',
            data:[40.0, 40.0, 10.0, 10.0],
            backgroundColor: [
                'rgba(75, 0, 130, 0.6)',  
                'rgba(255, 0, 127, 0.6)',   
                'rgba(255, 140, 0, 0.6)',   
                'rgba(255, 215, 0, 0.6)'    
            ],
            borderColor: [
                'rgba(75, 0, 130, 1)',  
                'rgba(255, 0, 127, 1)',   
                'rgba(255, 140, 0, 1)',   
                'rgba(255, 215, 0, 1)'    
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
});

