import { PresentationControls, Float , Environment, useGLTF, ContactShadows } from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
    return <>
        
        <Environment preset = "city" />

        <color attach="background" args={['#241a1a']} />

        
        <PresentationControls
            global 
            rotation={[0.13, 0.1, 0]} 
            polar = {[ -0.4 , 0.2]}
            azimuth={[- 1, 0.75]}
            config={{ mass : 2, tension : 200}}
            snap= {{mass : 4, tension : 300}}
        >    
            <Float rotationIntensity={0.4}>           
                <primitive 
                object = {computer.scene}
                position-y = {-1.2}
                />
            </Float>
        </PresentationControls>

        <ContactShadows 
            position-y={-1.4}
            opacity={0.5}
            scale={5}
            blur={2.4}
        />    


    </>
}


