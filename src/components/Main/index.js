import React, { useState } from 'react';
import classnames from 'classnames';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

import { Button2 } from '../ButtonElement';
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
import { PageTitle, PageHeader } from '../Projects/ProjectElements2';

const Main = ({
  imgStart,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  page,
  classname,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <MainContainer
      className="is-flex is-justify-content-center is-align-items-center"
      id={id}
    >
      <MainBackground className="columns is-relative">
        <MainBlock1 className="column is-half" />
        <MainBlock2 className="column" />
      </MainBackground>
      <MainWrapper className="is-flex is-justify-content-center">
        <MainRow imgStart={imgStart}>
          <Column1 className="px-4 mx-6">
              <PageTitle className="is-size-4 is-uppercase has-text-weight-light my-3">
                {topLine}
              </PageTitle>
              <PageHeader className="is-size-4 has-text-weight-semibold my-3">
                {headline}
              </PageHeader>
              <ProjectDesc className="is-size-6 my-5 has-text-weight-light">
                {description}
              </ProjectDesc>
              <div className="is-flex is-justify-content-flex-start">
                <Button2
                  to={page}
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                >
                  {' '}
                  {buttonLabel}
                  {hover ? (
                    <MdArrowForward className="arrow-forward" />
                  ) : (
                    <MdKeyboardArrowRight className="arrow-right" />
                  )}
                </Button2>
              </div>
          </Column1>
          <Column2 className="column px-4 mx-6 is-flex is-justify-content-center">
            <img
              className={classnames('image mb-5', classname)}
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
