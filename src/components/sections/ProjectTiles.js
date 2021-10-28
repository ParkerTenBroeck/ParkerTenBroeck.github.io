import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const ProjectTile = ({title, description , image, ...props}) => (
  <div className="tiles-item reveal-from-bottom">
    <div className="project-tile-item-inner tiles-item-inner">
      <Image className="project-tile-item-image" src={image !=null ? image : require("./../../assets/images/features-split-image-01.png").default}/>
      <div className="project-tile-item-title text-xxs mt-32 mb-0 has-top-divider">
        <span className="project-tile-item-name text-color-high">{title}</span>
      </div>
      <div className="project-tile-item-content">
        <p className="text-xxxs mb-0">{description}</p>
      </div>
      <span  className="project-tile-item-link text-xxxs project-tile-item-title">
        <span>See More ➜</span>
      </span>
  </div>
</div>
);

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
              title="MIPS Assembler" 
              description="this is a crazy wacky bazzar thing that i can write about for AGES but i wont because then maybe just maybe this wont work lets home that ia can do this bla bla bal"/>
            
            <ProjectTile 
              title="MIPS Assembler" 
              description="this is a crazy wacky bazzar thing that i can write about for AGES but i wont because then maybe just maybe this wont work lets home that ia can do this bla bla bal"/>
            
            <ProjectTile 
              title="MIPS Assembler" 
              description="this is a crazy wacky bazzar thing that i can write about for AGES but i wont because then maybe just maybe this wont work lets home that ia can do this bla bla bal"/>
            <ProjectTile 
              title="MIPS Assembler" 
              description="this is a crazy wacky bazzar thing that i can write about for AGES but i wont because then maybe just maybe this wont work lets home that ia can do this bla bla bal"/>
            
            <ProjectTile 
              title="MIPS Assembler" 
              description="this is a crazy wacky bazzar thing that i can write about for AGES but i wont because then maybe just maybe this wont work lets home that ia can do this bla bla bal"/>
            <ProjectTile 
              title="MIPS Assembler" 
              description="this is a crazy wacky bazzar thing that i can write about for AGES but i wont because then maybe just maybe this wont work lets home that ia can do this bla bla bal"/>
            <ProjectTile 
              title="MIPS Assembler" 
              description="this is a crazy wacky bazzar thing that i can write about for AGES but i wont because then maybe just maybe this wont work lets home that ia can do this bla bla bal"/>
            <ProjectTile 
              title="MIPS Assembler" 
              description="this is a crazy wacky bazzar thing that i can write about for AGES but i wont because then maybe just maybe this wont work lets home that ia can do this bla bla bal"/>
          
          </div>
        </div>
      </div>
    </section>
  );
}

ProjectTiles.propTypes = propTypes;
ProjectTiles.defaultProps = defaultProps;

export default ProjectTiles;