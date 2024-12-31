// Initialize the map
const map = L.map('map').setView([20, 78], 5); // Centered on India

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© Suneel Bose'
}).addTo(map);

var greenIcon = L.icon({
  iconUrl: 'icon.png',

  iconSize:     [40, 40], // size of the icon/ point of the icon which will correspond to marker's location point from which the popup should open relative to the iconAnchor
  iconAnchor:   [20, 39], // point of the icon which will correspond to marker's location

});

// Add a marker
L.marker([13.0843, 80.2705],{icon: greenIcon}).addTo(map).bindPopup('<b> <center> CHENNAI</b> <p> <div style = text-align:justify;> Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras.</p> <center> <img src="https://lh5.googleusercontent.com/p/AF1QipPguY7_mH9pn84VhNAgskjmp-BXp3P9MzNwT9u0=w540-h312-n-k-no" height="172px" width="300px"/>');
L.marker([12.9716, 77.5946],{icon: greenIcon}).addTo(map).bindPopup("<b> <center> BENGALURU</b> <p> <div style = text-align:justify;> Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building.</p> <center> <img src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRxaIMLMGKQGCD1fazX1wTEEJXrOYv0DKhriffQ9SFNxt8WUjJkc9Qbqk3YqePb4JBQes6i3_m--FQsGHWSrKPrb_W7Qs0qJaAuACrRJg' height='172px' width='300px'/>");
L.marker([28.7041, 77.1025],{icon: greenIcon}).addTo(map).bindPopup("<b> <center> DELHI</b> <p> <div style = text-align:justify;> Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people.</p> <center> <img src='https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSeyL1GIMeRXR8OySIAtIikdxgb1odLr4DbU6fvtD65asJhMxd6g7i0SRkPOu8TctkBUPHDDQ6J1LAWslJLZkLVagRtW7IlGTXhZb2wgQ' height='172px' width='300px'/>");
L.marker([19.0760, 72.8777],{icon: greenIcon}).addTo(map).bindPopup("<b> <center> MUMBAI</b> <p> <div style = text-align:justify;> Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva.</p> <center> <img src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSzrwUC9mrBbZLTowWW_KRYX6WHVINJo_WojVeGrenWJcjJn4GdwNcbJTAV18RxPy3W7VE086dqAkP1nRaaTLQlV0UQSbDzfGo9ebZJwg' height='172px' width='300px'/>");
L.marker([22.5744, 88.3629],{icon: greenIcon}).addTo(map).bindPopup("<b> <center> KOLKATA</b> <p> <div style = text-align:justify;> Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals. It’s also home to Mother House, headquarters of the Missionaries of Charity, founded by Mother Teresa, whose tomb is on site.</p> <center> <img src='https://lh5.googleusercontent.com/p/AF1QipNsIVE7E2eQ_MI9RFNeE9i96IK8fTY8RtX41tDX=w540-h312-n-k-no' height='172px' width='300px'/>");