function Clock({ minutes, seconds }) {
    return (
        <div className="clock">
            {
            `${minutes < 10? '0' + minutes : minutes}
            :
            ${seconds < 10 ? '0' + seconds : seconds}`
            }
        </div>
    );
}

export default Clock;