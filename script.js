// --- JAVASCRIPT CODE ---

document.getElementById('solarForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Page reload hone se rokne ke liye
    
    // Form se user ka data nikalna
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;

    // Screen par ek pop-up message dikhana
    alert(`Dhanyawad ${name}!\n\nH R Solar Solutions me aapki enquiry register ho gayi hai.\nHum jald hi aap se ${phone} par sampark karenge.`);
    
    // Form submit hone ke baad saari fields khali (reset) karna
    document.getElementById('solarForm').reset();
});
document.getElementById('solarForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Default submit rokne ke liye
    
    // Form se data nikalna
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Aapka asli WhatsApp number (Yahan apna number country code '91' ke sath dalein)
    const myWhatsAppNumber = "918233803572"; 

    // WhatsApp par bhejne ke liye text message tayar karna
    const textMessage = `New Enquiry from HR Solar Website:%0A%0A` + 
                        `👤 Name: ${name}%0A` + 
                        `📞 Phone: ${phone}%0A` + 
                        `☀️ Requirement: ${service}%0A` + 
                        `💬 Message: ${message}`;

    // WhatsApp ka link banakar customer ko redirect karna
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${myWhatsAppNumber}&text=${textMessage}`;
    
    window.open(whatsappUrl, '_blank'); // Naye tab me WhatsApp khulega
});