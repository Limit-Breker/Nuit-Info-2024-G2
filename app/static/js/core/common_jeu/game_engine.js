export default class GameEngine {

    height;
    width;

    constructor(canvasId, width, height) {

        this.height = height
        this.width = width
        
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            throw new Error(`Canvas with ID "${canvasId}" not found.`);
        }
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
        
        // État du jeu
        this.running = false;
        this.lastFrameTime = 0;
        this.staticGameObjects = [];
        this.dynamicGameObjects = [];

    }

    addStaticObject(gameObject) {
        this.staticGameObjects.push(gameObject);
    }

    addDynamicObject(gameObject) {
        this.dynamicGameObjects.push(gameObject);
    }

    removeDynamicObject(gameObject) {
        this.dynamicGameObjects = this.dynamicGameObjects.filter(obj => obj !== gameObject);
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.lastFrameTime = performance.now();
            this.loop();
        }
    }

    stop() {
        this.running = false;
    }

    loop() {
        if (!this.running) return;

        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastFrameTime) / 1000; // en secondes
        this.lastFrameTime = currentTime;

        this.update(deltaTime);
        this.render();

        requestAnimationFrame(() => this.loop());
    }

    update(deltaTime) {
        
        this.staticGameObjects.forEach(
            obj => {
                if(obj.isInBounds(this.height,this.width)) {
                    obj.update(deltaTime)
                }
            }
        );
        
        this.dynamicGameObjects.forEach(
            obj => {
                if(obj.isInBounds(this.height,this.width)) {
                    obj.update(deltaTime)
                }
            }
        );
    }

    render() {
        
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        
        this.staticGameObjects.forEach(obj => obj.render(this.context));
        this.dynamicGameObjects.forEach(obj => obj.render(this.context));
    }
}