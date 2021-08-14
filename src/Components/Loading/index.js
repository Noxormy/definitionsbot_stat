import './index.sass'

function Loading() {
    return (
        <div className="loading_container">
            <div className="loading_spin">
                <div className="front"/>
                <div className="back"/>
                <div className="right"/>
                <div className="left"/>
                <div className="top"/>
                <div className="bottom"/>
            </div>
        </div>
    )
}

export default Loading
