document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded and DOM ready');

  var typed = new Typed("#typed", {
    strings: [
      "Data Scientist",
      "Machine Learning Engineer",
      "AI Developer",
      "Generative AI Enthusiast",
      "Unity AR/VR Developer",
      "Intelligent Chatbot Creator",
      "Big Data Analyst",
      "AI for Healthcare Innovator",
      "Interactive App Developer",
      "Data Storyteller & Visualizer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });

  // Modal Logic for Project Descriptions
  const projects = document.querySelectorAll(".project");
  const modal = document.getElementById("project-modal");
  const modalTitle = document.querySelector("#project-modal .modal-content h2");
  const modalDescription = document.querySelector("#project-modal .modal-content .modal-body div");
  const closeBtn = document.querySelector("#project-modal .close-btn");

  // Assign descriptions dynamically based on the clicked project
  projects.forEach((project, index) => {
    project.addEventListener("click", () => {
      console.log(`Project ${index} clicked`);
      let content = '';
      switch (index) {
          case 0:
  modalTitle.textContent = "AI Assistant for Doctors";
  content = `
<p>I developed this AI-powered medical assistant using <strong>Google Gemini Pro</strong> and <strong>Streamlit</strong>. The goal was to create a lightweight, intuitive tool that brings AI into medical decision support. The application connects a powerful vision-language model to a user-friendly web interface, allowing real-time interaction with uploaded medical images.</p>

<p>Once a user uploads an image—such as an X-ray or a skin condition—the assistant processes it instantly, interprets key patterns, and returns structured insights. It identifies potential abnormalities, suggests next steps like possible treatments or referrals, and flags urgent concerns if needed. The workflow is fully automated, requiring no technical expertise from the user.</p>

<p>What sets this project apart is its clarity and accessibility. The assistant delivers explanations in plain, human-readable language, helping non-experts and healthcare professionals alike understand complex data quickly. It’s fast, interactive, and designed with user comfort in mind—making it a practical companion in medical environments.</p>

<p><em>⚠️ Note: This tool is for assistive use only. Always consult a qualified medical professional for accurate diagnosis and treatment.</em></p>

    <p>🔍 <strong>Curious to see it in action?</strong> Watch the interactive demo where I test the assistant live by uploading various images and exploring its responses.<br>
    🌐 <strong>Want to try it yourself?</strong> Just click the "Live App" button and explore how the assistant responds to your inputs.</p>

    <div class="buttons">
      <a href="videos/Medicalimage.mp4" target="_blank">🎥 Demo</a>
      <a href="https://medical-image-analysis-ks.streamlit.app/" target="_blank">🌐 Live App</a>
    </div>
      `;
  break;


        case 1:
          modalTitle.textContent = "Fraud Detection in E-Commerce";
          content = `
<p>This project is a machine learning–driven fraud detection system built to identify suspicious transactions on e-commerce platforms. Using real-world transactional data and the power of <strong>XGBoost</strong>, the model learns to distinguish between legitimate and fraudulent activities by analyzing patterns in payment methods, product categories, user behavior, and purchase history.</p>

<p>I designed the system as a full end-to-end pipeline—covering data preprocessing, feature engineering, model training, performance tuning, and result visualization. The model was fine-tuned to optimize <strong>precision</strong> and <strong>recall</strong>, ensuring high accuracy in identifying risky transactions. For insights, I visualized the outcomes using <strong>Tableau</strong>, making the results easy to interpret for both technical and business users.</p>
            <p>⚠️ <strong>How it works:</strong> When a transaction is processed, the model assigns a fraud probability score in real time. Transactions above a certain threshold trigger alerts or require manual review. This helps platforms reduce chargebacks and protect both customers and businesses.</p>
            <p>🟡 <strong>Want to explore?</strong> Click the "GitHub" button to view the code, dataset, and logic used. You can also try out the Tableau dashboard for visual insights into what patterns the model has uncovered.</p>
            <div class="buttons">
              <a href="https://github.com/keerthanasrinivasan22/fraud-detection-cozi" target="_blank">📁 GitHub</a>
            </div>
          `;
          break;

        case 2:
          modalTitle.textContent = "AR/VR Navigation App – UNT";
          content = `
           <p>This project is an immersive indoor navigation and evacuation guidance system built using <strong>Unity</strong>, <strong>MRTK3</strong>, and <strong>HoloLens</strong>, designed specifically for the University of North Texas (UNT). The app leverages Augmented and Virtual Reality to help students, visitors, and emergency responders find the shortest or safest routes across Discovery Park.</p>

<p>Users scan a physical room marker—like a door sign—using the HoloLens or mobile camera. The system uses <strong>Vuforia</strong> to detect the marker, then loads corresponding 3D path data from JSON files. A visual evacuation path is overlaid onto the real-world floor using <strong>Unity’s LineRenderer</strong>, dynamically showing the <strong>nearest exit</strong> or an <strong>alternate safe route</strong> based on user selection.</p>

<p>I also integrated a custom-built <strong>chatbot assistant</strong> that responds to questions related to UNT. While it doesn’t handle complex natural language queries, it provides helpful instructions and supports users by offering guidance based on the scanned location or emergency context.</p>


<p>👓 <strong>Technology Stack:</strong> Unity and MRTK3 for interaction design, Photon for multi-user coordination, Cesium for accurate spatial mapping, and Vuforia for image target recognition. The app supports Android and HoloLens deployment for hands-free mixed-reality navigation.</p>

<p>🎥 <strong>Watch it in action:</strong> Click the "Link" buttons below to explore live demos of the app in action on both HoloLens and Android. You’ll see how the system enables both solo and collaborative navigation experiences through voice and AR overlays.</p>

            <div class="buttons">
              <a href="https://ci.unt.edu/dvxr/research/ar/mara.html" target="_blank">🎥 Link</a>
              <a href="https://ci.unt.edu/dvxr/research/ar/ar.html" target="_blank">🎥 Link</a>
            </div>
          `;
          break;

          case 3:
  modalTitle.textContent = "EEG-Based Stress & Anxiety Management with VR";
  content = `
    <p>I’m building a real-time stress and anxiety monitoring system that integrates <strong>EEG signal analysis</strong> with <strong>Virtual Reality (VR)</strong> to support mental health and emotional well-being. The system uses brainwave patterns to detect the user’s current emotional state and adapt the VR environment accordingly—providing calming stimuli when needed.</p>

    <p>For EEG signal collection, I’m using the <strong>Emotiv Insight</strong> headset, which offers a reliable, non-invasive way to measure brain activity across five channels. Emotiv also provides an SDK and Cortex API, which I use to stream live EEG data into Python for processing. I collect metrics such as <strong>engagement, stress, excitement, and relaxation</strong>—as well as raw frequency data across <strong>Alpha</strong>, <strong>Beta</strong>, and <strong>Theta</strong> bands.</p>

    <p>The signal is preprocessed using digital filtering to remove noise and artifacts. From there, I extract statistical and spectral features, including band power ratios and time-domain metrics. These features are passed into trained <strong>machine learning models</strong> (e.g., <strong>Support Vector Machines</strong> and <strong>Random Forest classifiers</strong>) to classify the user’s stress or relaxation level in real time.</p>

    <p>In parallel, I’m building immersive VR scenes in <strong>Unity</strong>—such as tranquil nature environments, guided meditations, and breathing rooms. The classified EEG output is used to modify the virtual environment on the fly. For example, if high stress is detected, the system can lower ambient light, introduce calming music, or trigger mindfulness prompts. If calm is detected, the user may receive visual encouragement or rewards to reinforce that state.</p>

    <p>To close the loop, I’m developing a feedback interface that provides the user with <strong>session summaries</strong>—including stress scores over time, spikes, and recovery periods. This helps users reflect on their mental state and progress across multiple sessions.</p>

    <p>💡 <strong>Core Technologies & Methods:</strong> Emotiv Insight EEG headset, Emotiv Cortex API (for live signal acquisition), Python (for signal processing and ML), Unity (for VR design), and real-time EEG-to-environment mapping logic.</p>

    <p>This project aims to contribute to the future of personalized digital therapy by making mental health interventions adaptive, engaging, and measurable—combining neuroscience with immersive technology.</p>
  `;
  break;

        case 4:
          modalTitle.textContent = "Obstacle Avoidance Robot";
          content = `
            <p>This project showcases an intelligent Arduino-powered robot capable of both <strong>line following</strong> and <strong>real-time obstacle avoidance</strong>. Designed using embedded C++ and ultrasonic sensing, the robot can autonomously navigate along a predefined path while dynamically reacting to objects in its way.</p>

<p>The robot is built on an <strong>Arduino UNO</strong> microcontroller and equipped with <strong>infrared sensors</strong> for detecting black line tracks and an <strong>ultrasonic sensor (HC-SR04)</strong> for obstacle detection. Under normal conditions, it follows a black line using sensor feedback to control motor direction and maintain alignment with the path.</p>

<p>When an obstacle is detected within a set distance threshold, the robot stops, scans for alternate clearance (usually to the left or right), then diverts around the object. After successfully bypassing the obstacle, it intelligently searches for and realigns with the original line path to continue its journey. This mimics behavior similar to autonomous mobile robots used in industrial or warehouse automation.</p>

<p>🧭 <strong>How it works:</strong>  
The IR sensors continuously read surface contrast to follow the line, while the ultrasonic sensor actively scans for nearby objects. If an obstacle is detected, the robot stops, turns slightly away, checks for a clear side, and maneuvers around the object. Once past the obstacle, it rotates back toward the line and resumes line following. This blend of reactive and path-tracking behavior enables safe navigation in dynamic environments.</p>

<p>🧪 <strong>Technologies Used:</strong> Arduino UNO, ultrasonic sensor (HC-SR04), IR line sensors, motor driver (L298N), wheels & chassis, and embedded C++ programming logic.</p>

<p>This project demonstrates how simple sensors and logic can be fused to simulate complex behavior in robotics. It provides a strong foundation for further exploration into autonomous navigation, obstacle handling algorithms, and sensor-based decision-making systems.</p>
          `
          ;
          break;

        case 5:
          modalTitle.textContent = "Cube Satellite Life Transmitter";
          content = `
            <p>In this project, I designed and developed a “Proof-of-Life Transmitter” (PLT) system for a CubeSat — a small research satellite used in academic space missions. The goal was to create a compact system that could automatically send periodic heartbeat signals once deployed into orbit, confirming that the satellite is alive and functioning.</p>

<p>I built the system using an <strong>Arduino Nano</strong> microcontroller and a <strong>LoRa RA-02 500mW transmitter</strong>. To ensure reliability in space, I implemented a <strong>dual redundant mechanical deployment switch</strong>. These switches are triggered the moment the CubeSat is released from the deployer. Even if one switch fails, the second independently powers the transmitter — which is crucial for space-grade reliability.</p>

<p>I also developed a custom <strong>tape measure dipole antenna</strong> that wraps around the CubeSat’s body and unfolds automatically after deployment. Since CubeSats are extremely size-constrained, this self-deploying antenna was a practical solution for achieving effective signal transmission in orbit.</p>

<p><strong>How it works:</strong> After deployment, the switch activates the circuit and the Arduino begins transmitting periodic signals using the LoRa module. I used <strong>MATLAB</strong> to simulate satellite trajectories and run link budget calculations — ensuring that the signal would be strong enough to reach the ground station, even from Low Earth Orbit (~350 km).</p>

<p>This hands-on experience gave me the opportunity to work with embedded C++, hardware integration, RF communication, and space mission simulation. It helped me understand how small satellite systems function and how proof-of-life signals are vital for mission success in real-world aerospace applications.</p>

            <div class="buttons">
              <a href="images/CubeSat.pdf" target="_blank">📂 View Slides</a>
            </div>
            <p>This project demonstrates how low-cost embedded systems can be adapted for real-world aerospace applications — including satellite health monitoring, communication testing, and payload validation.</p>
          `;
          break;
          


      }
      modalDescription.innerHTML = content;
      modal.style.display = "flex";
    });
  });

  // Close the modal when clicking the close button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    console.log('Modal closed by close button');
  });

  // Close the modal when clicking outside of the modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      console.log('Modal closed by clicking outside');
    }
  });

  // Experience Timeline (if needed, adjust based on your intent)
  const steps = document.querySelectorAll('.step');
  const roleTitle = document.getElementById('role-title');
  const companyName = document.getElementById('company-name');
  const roleDetails = document.getElementById('role-details');
  // Note: The elements with these IDs are not present in the HTML. Remove or add them if intended.
});