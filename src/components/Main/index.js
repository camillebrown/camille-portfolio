import React, { useState } from 'react';
import classnames from 'classnames';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

import {
  MainContainer,
  MainRow,
  MainWrapper,
  MainBlock1,
  MainBlock2,
  MainBackground,
  Column1,
  Column2,
  ProjectDesc,
} from './MainElements';
import { Button2 } from '../common/ButtonElement';
import { PageTitle, PageHeader } from '../Projects/ProjectElements';

const Main = ({
  id,
  img,
  alt,
  page,
  topLine,
  imgStart,
  headline,
  classname,
  description,
  buttonLabel,
  container_class
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <MainContainer
      className={classnames('is-flex is-justify-content-center is-align-items-center', container_class)}
      id={id}
    >
      <MainBackground className="columns is-relative">
        <MainBlock1 className="column is-half" />
        <MainBlock2 className="column" />
      </MainBackground>
      <MainWrapper className="is-flex is-justify-content-center">
        <MainRow imgStart={imgStart}>
          <Column1>
            <PageTitle className="is-size-6 is-uppercase has-text-weight-light-desktop my-3">
              {topLine}
            </PageTitle>
            <PageHeader className="is-size-4-desktop is-size-6-touch has-text-weight-semibold my-3">
              {headline}
            </PageHeader>
            <ProjectDesc className="is-size-6 my-5 has-text-weight-light">
              {description}
            </ProjectDesc>
            <Button2 to={page} onMouseEnter={onHover} onMouseLeave={onHover}>
              {buttonLabel}
              {hover ? (
                <MdArrowForward className="arrow-forward ml-1" />
              ) : (
                <MdKeyboardArrowRight className="arrow-right ml-1" />
              )}
            </Button2>
          </Column1>
          <Column2 className="column is-flex is-justify-content-center">
            <img
              className={classnames('image', classname)}
              src={img}
              alt={alt}
            />
          </Column2>
        </MainRow>
      </MainWrapper>
    </MainContainer>
  );
};

export default Main;
