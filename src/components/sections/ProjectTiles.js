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

const SkillIcon = ({iconSize, image, text, color, size, offset, ...props}) => {

  return (<>
  <span className="mr-8" style={{backgroundColor:color == null ? "red" : color,borderRadius:"9999px", padding:"0 7px", whiteSpace: "nowrap"}}>
    <span>
      <img    className="mr-4"
              src={ image != null ?  image.default : require('./../../assets/images/skills/skill-tile-icon-java.svg')}
              alt={image.alt}
              width={size ==null ?"16px": size}
              height={size ==null ?"16px": size}
              style = {{display: "inline-block",
                color: "inherit",
                fontStyle: "normal",
                lineHeight: "0",
                textAlign: "center",
                textTransform: "none",
                verticalAlign:offset == null ? "-.050em" : offset}} 
              />
    </span>
    <span className="text-xxxs" style={{verticalAlign: ".125em", color:"white"}}>
      {text}
    </span>
  </span>
  </>)
}

const AutoSkillIcon = ({skill, ...props}) => {
  
  switch (skill){
    case "java":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-java.svg")} text="Java" color="#A5ABF9"/>)
    case "rust":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-rust.svg")} text="Rust" color="#B7410E" size="22px"/>)
    case "c":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-c.svg")} text="C" color="#7CBFFF"/>)
    case "cpp":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-cpp.svg")} text="C++" color="#7CBFFF"/>)
    case "mips":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-mips.svg")} text="MIPS" color="#43DB47"/>)
    case "vhds":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-vhdl.svg")} text="VHDL"/>)
    case "javascript":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-javascript.svg")} text="JavaScript" color="#AE9D14"/>)
    case "html":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-html.svg")} text="HTML" color="#FF722A"/>)
    case "css":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-css.svg")} text="CSS" color="#1E41B2"/>)
    case "reactjs":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-reactjs.svg")} text="React.js"/>)
    case "php":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-php.svg")} text="PHP" color="#A5ABF9"/>)
    case "git":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-git.svg")} text="Git" color="#C13C1E"/>)
    case "mysql":
      return(<SkillIcon image={require("./../../assets/images/skills/skill-tile-icon-mysql.svg")} text="MySQL" color="#A5ABF9"/>)
    default:
      return(<></>)
    }
};

const ProjectTile = ({title, description , image,website,gitlink,skills, ...props}) => {
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
  <div className="container mt-24 ml-24 mr-24 mb-32" style={{width:"auto"}}>
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
    {skills === null || skills.length === 0 ? <></> :
    <>
    <div className="top-border"></div>
    <div className="mt-16">
      <div className="mb-8">
        <span>Skills</span>
      </div>
      <div className="mb-16">
      { 
        skills.map((name) => ( 
          <AutoSkillIcon key={name} skill={name}></AutoSkillIcon>
        ))
      }
      </div>
    </div>
    </>
    }

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
    {website == null ? <></> :
    <>
    <div className="top-border"></div>
      <div className="mt-16">
        <div className="mb-8">
          <span>Website</span>
        </div>
        <div className="mb-16">
          <a style={{color:"#177ddc",textDecoration:"underline"}} className="text-xxs mb-16" href={website}>{website}</a>
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
              image={require("./../../assets/images/projects/clike-compiler.jpg").default}
              title="MIPS Edu" 
              website="https://parkertenbroeck.com/MIPS-edu/"
              gitlink="https://github.com/ParkerTenBroeck/MIPS-edu"
              skills = {["rust", "mips", "assembly"]}
              description="A IDE, Assembler, Debugger, and emulator for an educationa version of the MIPS32 ISA. This project was started as a way to learn and familiarize myself with the rust programing language "/>  
            <ProjectTile 
              image={require("./../../assets/images/projects/retargetable-assembler.jpg").default}
              title="Retargetable Assembler" 
              gitlink = "https://github.com/ParkerTenBroeck/Retargetable-Assembler"
              skills = {["java","mips"]}
              description="A Retargetable Assembler written in java that produces ELF files. This assembler contains a powerful builtin pre-processor with macro and expression support."/>  
            <ProjectTile 
              image={require("./../../assets/images/projects/retargetable-assembler-ide.jpg").default}
              title="Retargetable Assembler IDE" 
              skills = {["java", "mips"]}
              description="An IDE implementation written in java made spesifically for Assemblers using the Retargetable Assembler Project. This IDE has tools for editing and building source assemble and running and debugging of binary files."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/mips-assembler.jpg").default}
              title="MIPS" 
              gitlink="https://github.com/ParkerTenBroeck/MIPS"
              skills = {["java","mips"]}
              description="This project is an implementation of a modified MIPS ISA using the Retargetable Assembler and Retargetable Assembler IDE."/>

            <ProjectTile 
              image={require("./../../assets/images/projects/msip.jpg").default}
              title="MSPI attendance system" 
              skills = {["java"]}
              description="A system intended to provide a simple interface to track and premit students to 'travel' from one msip class to another using google sheets as a secure backend."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/mycpu.jpg").default}
              title="MyCPU(16bits)" 
              gitlink="https://github.com/ParkerTenBroeck/MyCPU_16bit"
              skills = {[]}
              description="An attempt to build a CPU ISA and archetecute based on the SAP-1 CPU with no prior knowledge of CPU design."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/mips-cpu.jpg").default}
              title="MIPS CPU" 
              skills = {[]}
              description="A mostly single cycle processor built to use the custom MIPS ISA used in the MIPS assembler project."/>

            <ProjectTile 
              image={require("./../../assets/images/projects/16x16-led-matrix-display.jpg").default}
              title="16x16 LED Matrix Display" 
              skills = {[]}
              description="A Simple 16x16 LED Matrix display made form 3mm red LEDs built to understand the concept of multiplexing."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/mini-robot-transmitter-receiver.jpg").default}
              title="Wireless Robot Controller" 
              gitlink="https://github.com/ParkerTenBroeck/MiniBot-Control-Boards"
              skills = {[]}
              description="A Small PCB designed to be cheap, easy to assemble and have flexible use cases while fitting in a small footprint."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/legend-of-xor.jpg").default}
              title="Legend Of Xor" 
              gitlink="https://github.com/ParkerTenBroeck/Legend-of-Xor"
              skills = {["java"]}
              description="A experamental 2D game engine written in java made as a grade 12 final project for a coding course"/>
            <ProjectTile 
              image={require("./../../assets/images/projects/mass-storage-client.jpg").default}
              title="Mass Storage Client" 
              gitlink="https://github.com/ParkerTenBroeck/Mass-Storage-Client"
              skills = {["java"]}
              description="A mod for minecraft made to access all chests in a rechable area on a vanilla server."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/3d-renderer.jpg").default}
              title="3D Renderer" 
              gitlink="https://github.com/ParkerTenBroeck/HighSchoolPrograms"
              skills = {["java"]}
              description="A simple 3D renderer written in java to teach myself vectors and matrix operations."/>
            
            <ProjectTile 
              image={require("./../../assets/images/projects/personal-website.jpg").default}
              title="Personal Website" 
              gitlink="https://github.com/ParkerTenBroeck/ParkerTenBroeck.github.io"
              skills = {["reactjs", "javascript", "html", "css"]}
              description="My own personal website made to educate myself on making fast interactive websites with a modern look and feel."/>
            
            <ProjectTile 
              image={require("./../../assets/images/projects/actually-pong.jpg").default}
              title="Actually Pong" 
              gitlink="https://github.com/ParkerTenBroeck/HighSchoolPrograms"
              skills = {["java"]}
              description="A Pong clone that was written to teach me the basics of java / object oriented programing. Also includes a simple AI for the player to battle."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/asteroids.jpg").default}
              title="Asteroids" 
              gitlink="https://github.com/ParkerTenBroeck/HighSchoolPrograms"
              skills = {["java"]}
              description="A Asteroids clone that has some extra personality added."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/minesweeper.jpg").default}
              title="MineSweeper" 
              gitlink="https://github.com/ParkerTenBroeck/HighSchoolPrograms"
              skills = {["java"]}
              description="A true to the original minesweeper cline intended to learn the practical uses of recursion."/>

            <ProjectTile 
              image={require("./../../assets/images/projects/raycaster.jpg").default}
              title="Javascript RayTracer" 
              skills = {["javascript", "html", "css"]}
              description="A very simple RayTracer written written to introduce myself to javascript."/>
            <ProjectTile 
              image={require("./../../assets/images/projects/mirror-mages.jpg").default}
              title="Mirror Mages" 
              gitlink="https://github.com/ParkerTenBroeck/Mirror-Mages"
              skills = {["cpp","c"]}
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