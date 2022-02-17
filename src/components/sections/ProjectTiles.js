import React,{useState} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import SideDrawer from '../elements/SideDrawer'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}


const ProjectTile = ({title, description , image,gitlink, ...props}) => {
  const [showD, setVisible2] = useState(false);
  const showDrawer = () => {
    setVisible2(showD ? false : true);
  };
  const closeDrawer = () => {
    setVisible2(false);
  };

  return (
    <>
  <div className="tiles-item reveal-from-bottom">
    <div className="project-tile-item-inner tiles-item-inner" onClick={showDrawer}>
      <Image className="project-tile-item-image" src={image !=null ? image : require("./../../assets/images/features-split-image-01.png").default}/>
      <div className="project-tile-item-title text-xxs mt-16 mb-0 has-top-divider">
        <span className="project-tile-item-name text-color-high">{title}</span>
      </div>
      <div className="project-tile-item-content">
        <p className="text-xxxs mb-0 project-tile-line-clamp">{description}</p>
      </div>
      <span  className="project-tile-item-link text-xxxs project-tile-item-title">
        <span>See More ➜</span>
      </span>
  </div>
</div>
<SideDrawer title={title} show={showD} handleClose={closeDrawer}>
  <div class="container mt-24 ml-24 mr-24 mb-32" style={{width:"auto"}}>
  {image == null ? <></> :
    <>
    <div className="mb-24">
      <div className="mb-8">
        <span>Images</span>
      </div>
      <div className="mb-16">
        <Image className="side-drawer-item-image" src={image}/>
      </div>
    </div>
    </>
    }
    <div className="top-border"></div>
    <div className="mt-16">
      <div className="mb-8">
        <span>Skills</span>
      </div>
      <div className="mb-16">

      </div>
    </div>

    {description == null ? <></> :
    <>
    <div className="top-border"></div>
    <div className="mt-16">
      <div className="mb-8">
        <span>Description</span>
      </div>
      <div className="mb-16">
        <p className="text-xs mb-16">{description}</p>
      </div>
    </div>
    </>
    }
    {gitlink == null ? <></> :
    <>
    <div className="top-border"></div>
      <div className="mt-16">
        <div className="mb-8">
          <span>Github</span>
        </div>
        <div className="mb-16">
          <a style={{color:"#177ddc",textDecoration:"underline"}} className="text-xxs mb-16" href={gitlink}>{gitlink}</a>
        </div>
      </div>
      </>
    }
  </div>
</SideDrawer>
</>
);
};

const ProjectTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'project-tile section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'project-tile-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Projects',
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

          <ProjectTile 
              image={require("./../../assets/images/projects/retargetable-assembler.jpg").default}
              title="CLike Compiler" 
              gitlink="https://github.com/ParkerTenBroeck/CLike"
              description="A simple compiler written in rust for a c-like language. This project w"/>  
            <ProjectTile 
              image={require("./../../assets/images/projects/retargetable-assembler.jpg").default}
              title="Retargetable Assembler" 
              description="A Retargetable Assembler written in java that produces ELF files. This assembler contains a powerful builtin pre-processor with macro and expression support."/>  
            <ProjectTile 
              image={require("./../../assets/images/projects/retargetable-assembler-ide.jpg").default}
              title="Retargetable Assembler IDE" 
              description="An IDE implementation written in java made spesifically for Assemblers using the Retargetable Assembler Project. This IDE has tools for editing and building source assemble and running and debugging of binary files."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/mips-assembler.jpg").default}
              title="MIPS" 
              description="This project is an implementation of a modified MIPS ISA using the Retargetable Assembler and Retargetable Assembler IDE."/>

            <ProjectTile 
              image={require("./../../assets/images/projects/msip.jpg").default}
              title="MSPI attendance system" 
              description="A system intended to provide a simple interface to track and premit students to 'travel' from one msip class to another using google sheets as a secure backend."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/mycpu.jpg").default}
              title="MyCPU(16bits)" 
              description="An attempt to build a CPU ISA and archetecute based on the SAP-1 CPU with no prior knowledge of CPU design."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/mips-cpu.jpg").default}
              title="MIPS CPU" 
              description="A mostly single cycle processor built to use the custom MIPS ISA used in the MIPS assembler project."/>

            <ProjectTile 
              image={require("./../../assets/images/projects/16x16-led-matrix-display.jpg").default}
              title="16x16 LED Matrix Display" 
              description="A Simple 16x16 LED Matrix display made form 3mm red LEDs built to understand the concept of multiplexing."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/mini-robot-transmitter-receiver.jpg").default}
              title="Wireless Robot Controller" 
              description="A Small PCB designed to be cheap, easy to assemble and have flexible use cases while fitting in a small footprint."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/3d-renderer.jpg").default}
              title="3D Renderer" 
              description="A simple 3D renderer written in java to teach myself vectors and matrix operations."/>

            <ProjectTile 
              image={require("./../../assets/images/projects/actually-pong.jpg").default}
              title="Actually Pong" 
              description="A Pong clone that was written to teach me the basics of java / object oriented programing. Also includes a simple AI for the player to battle."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/asteroids.jpg").default}
              title="Asteroids" 
              description="A Asteroids clone that has some extra personality added."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/minesweeper.jpg").default}
              title="MineSweeper" 
              description="A true to the original minesweeper cline intended to learn the practical uses of recursion."/>

            <ProjectTile 
              image={require("./../../assets/images/projects/raycaster.jpg").default}
              title="Javascript RayTracer" 
              description="A very simple RayTracer written written to introduce myself to javascript."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/mirror-mages.jpg").default}
              title="Mirror Mages" 
              description="An incomplete attempt to write a simple game engine in c++ using entity component systems."/>
          

          </div>
        </div>
      </div>
    </section>
  );
}

ProjectTiles.propTypes = propTypes;
ProjectTiles.defaultProps = defaultProps;

export default ProjectTiles;