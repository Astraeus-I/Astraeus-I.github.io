# ⌨ Development Tools

Astraeus-I provides a comprehensive range of sophisticated yet accessible tools, tailored for both professional and hobbyist needs, ensuring deep insights and effective utilization of the board's capabilities. This includes intuitive software for real-time data monitoring, advanced PCB design resources, and customizable mechanical cases for physical protection and functional optimization. These tools collectively offer a seamless experience, from detailed data analysis to practical application, enhancing both the understanding and practical usage of the Astraeus-I board.

## 💻 Software Tools

### 📋 Web Serial

Experience seamless board testing with libhals intuitive <a href="https://libhal.github.io/web-serial/" target="_blank">Web Serial Interface</a>. Simply connect the development board to your laptop or PC via a USB and watch real-time data transmissions unfold on your screen. This feature not only provides immediate insights into the board's performance and metrics but also ensures that any necessary calibrations or diagnostics can be performed effortlessly. Perfect for both developers and enthusiasts, our web-based serial connection offers a user-friendly gateway to understanding and harnessing the power of the avionics board.

## 🔧 Hardware Tools

### 🪛 PCB Design

We have used <a href="https://easyeda.com/" target="_blank">EasyEDA</a>, a free online PCB design tool, to design the Astraeus-I board. EasyEDA is a free, zero-install, cloud-based EDA tool, designed to facilitate seamless PCB design and collaboration. This tool offers a wide range of features including schematic capture, spice simulation, PCB layout, and PCB order. EasyEDA also provides a comprehensive library of over 1 million components, ensuring that users have access to a diverse range of components to choose from. The tool's intuitive interface and user-friendly features make it an ideal choice for both beginners and professionals alike.

### 🏰 Mechanical Cases

The Astraeus-I board is tailored to be housed within a 3D-printed enclosure. Theses enclosures are crafted to safeguard the board against external harm while maintaining stability and security. It is thoughtfully engineered to allow straightforward access to the board's ports and connectors, enabling hassle-free connections and disconnections of devices. There are two versions of the case: one suited for internal, non-aerodynamic applications, and another optimized for aerodynamic uses. These cases are intended to be fabricated using PLA filament in a 3D printing process.

### 🏰 Mechanical Cases

#### Astraeus Aero Case
<button id="toggle-model-top" class="underline-button">Toggle 3D Model</button>
<div id="astra_ground_top" style="width: 600px; height: 400px; display: none;"></div>

#### Astraeus Aero Case Lid
<button id="toggle-model-bottom" class="underline-button">Toggle 3D Model</button>
<div id="astra_ground_bottom" style="width: 600px; height: 400px; display: none;"></div>

<!-- Include Three.js and other necessary scripts -->
<script src="https://cdn.jsdelivr.net/npm/three@0.140.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.140.0/examples/js/loaders/STLLoader.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.140.0/examples/js/controls/OrbitControls.js"></script>



<script>
    let viewers = [];

    function getAssetPath(fileName) {
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        return isLocal ? `../../assets/${fileName}` : `/docs/assets/${fileName}`;
    }

    function setupSTLViewer(containerId, stlFileName) {
        let camera, scene, renderer, controls;
        const container = document.getElementById(containerId);

        initSTLViewer();
        window.addEventListener('resize', () => onWindowResize(containerId), false);

        function initSTLViewer() {
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xFFFFFF);

            camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
            camera.position.set(10, 10, 15);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            container.appendChild(renderer.domElement);

            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.minDistance = 5;
            controls.maxDistance = 50;

            const loader = new THREE.STLLoader();
            loader.load(getAssetPath(stlFileName), function (geometry) {
                const material = new THREE.MeshPhongMaterial({ color: 0x555555, specular: 0x111111, shininess: 200 });
                const mesh = new THREE.Mesh(geometry, material);

                mesh.scale.set(0.1, 0.1, 0.1);
                scene.add(mesh);

                camera.lookAt(mesh.position);
                controls.target.set(0, 0, 0);

                animate();
            });

            addLights();
        }

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }

        function addLights() {
            const ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(1, 1, 1);
            scene.add(directionalLight);
        }

        viewers.push({ container, camera, renderer, scene });
    }

    function onWindowResize(containerId) {
        const viewer = viewers.find(v => v.container.id === containerId);
        if (viewer) {
            viewer.camera.aspect = viewer.container.offsetWidth / viewer.container.offsetHeight;
            viewer.camera.updateProjectionMatrix();
            viewer.renderer.setSize(viewer.container.offsetWidth, viewer.container.offsetHeight);
        }
    }

    document.getElementById('toggle-model-top').addEventListener('click', function() {
        toggleVisibility('astra_ground_top');
    });

    document.getElementById('toggle-model-bottom').addEventListener('click', function() {
        toggleVisibility('astra_ground_bottom');
    });

    function toggleVisibility(containerId) {
        const container = document.getElementById(containerId);
        const isVisible = container.style.display !== 'none';
        container.style.display = isVisible ? 'none' : 'block';

        if (!isVisible) {
            onWindowResize(containerId);
        }
    }

    // Initialize viewers for each STL file
    setupSTLViewer('astra_ground_top', 'AstraeusGroundCasingTop.STL');
    setupSTLViewer('astra_ground_bottom', 'AstraeusGroundCasingBottom.STL');

</script>
