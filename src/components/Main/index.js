import React from 'react'
import Button from '../ButtonElement'
import { MainContainer, MainRow, Subtitle, Heading } from './MainElements'

const Main = ({lightText, lightBg, imgStart, topLine, headline, description, darkText, buttonLabel, img, alt, id}) => {
    return (
        <>
            <MainContainer lightBg={lightBg} id={id}>
                <div className="main-wrapper">
                    <MainRow imgStart={imgStart}>
                        <div className="column1">
                            <div className="text-wrapper">
                                <p className="top-line">{topLine}</p>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <div className="btn-wrap-main">
                                    <Button to="home"> {buttonLabel}</Button>
                                </div>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="img-wrap-main">
                                <img className="img-main" src={img} alt={alt} />
                            </div>
                        </div>
                    </MainRow>
                </div>
            </MainContainer>
        </>
    )
}

export default Main
