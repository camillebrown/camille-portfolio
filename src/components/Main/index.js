import React, { useState } from 'react'
import { Button2 } from '../ButtonElement'
import { MainRow } from './MainElements'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

const Main = ({ imgStart, topLine, headline, description, buttonLabel, img, alt, id, page, className }) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <div className={className} id={id}>
                <div className="main-wrapper">
                    <MainRow imgStart={imgStart}>
                        <div className="column1">
                            <div className="text-wrapper">
                                <p className="top-line">{topLine}</p>
                                <h1 className="main-h1">{headline}</h1>
                                <p className="main-desc" >{description}</p>
                                <div className="btn-wrap-main">
                                    <Button2
                                        to={page}
                                        onMouseEnter={onHover}
                                        onMouseLeave={onHover}
                                    > {buttonLabel}{hover ? <MdArrowForward className="arrow-forward" /> : <MdKeyboardArrowRight className="arrow-right" />}
                                    </Button2>
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
            </div>
        </>
    )
}

export default Main
