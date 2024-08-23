
    // Select all elements with the class 'info-header'
    const infoHeaders = document.querySelectorAll('.info-header');

    


    infoHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const plusMinus = header.querySelector('.plus-minus');
            
            // Toggle active class on the info content and change plus/minus sign
            if (content) {
                content.classList.toggle('active');
                plusMinus.textContent = content.classList.contains('active') ? '-' : '+';
            }

            // Ensure only one item is expanded at a time
            infoHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherContent = otherHeader.nextElementSibling;
                    const otherPlusMinus = otherHeader.querySelector('.plus-minus');
                    
                    if (otherContent && otherContent.classList.contains('active')) {
                        otherContent.classList.remove('active');
                        otherPlusMinus.textContent = '+';
                    }
                }
            });
        });
    });


  