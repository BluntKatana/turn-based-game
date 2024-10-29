import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createLight } from "./components/lights";
import { createScene } from "./components/scene";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";

export class World {
  private camera;
  private scene;
  private renderer;

  constructor(container: Element | null) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();

    container?.append(this.renderer.domElement);

    const cube = createCube();
    const light = createLight();
    this.scene.add(cube, light);

    const resizer = new Resizer(container, this.camera, this.renderer);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
