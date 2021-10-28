import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  iconSize: '72px',
  ...SectionTilesProps.defaults
}
const SkillCard = ({iconSize, image, text, revealDelay, ...props}) => (
    <div className="tiles-item reveal-from-bottom" data-reveal-delay={revealDelay}>
    <div className="tiles-item-inner">
      <div className="features-tiles-item-header">
        <div className="features-tiles-item-image ">
          <Image
            src={ image != null ?  image.default : require('./../../assets/images/skills/skill-tile-icon-java.svg')}
            alt={image.alt}
            width={iconSize}
            height={iconSize} />
        </div>
      </div>
      <div className="features-tiles-item-content">
        <p className="text-xs mt-0 mb-0">
          {text}
        </p>
      </div>
    </div>
  </div>
);

const SkillTiles = ({
  className,
  iconSize,
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Skills'
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
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-java.svg")} text="Java"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-c.svg")} text="C"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-cpp.svg")} text="C++"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-bash.svg")} text="Bash"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-mips.svg")} text="MIPS"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-vhdl.svg")} text="VHDL"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-javascript.svg")} text="JavaScript"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-html.svg")} text="HTML"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-css.svg")} text="CSS"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-reactjs.svg")} text="React.js"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-php.svg")} text="PHP"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-git.svg")} text="Git"/>
            <SkillCard image={require("./../../assets/images/skills/skill-tile-icon-mysql.svg")} text="MySQL"/>
          </div>
        </div>
      </div>
    </section>
  );
}

SkillTiles.propTypes = propTypes;
SkillTiles.defaultProps = defaultProps;

export default SkillTiles;