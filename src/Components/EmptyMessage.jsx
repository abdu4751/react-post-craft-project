let EmptyMessage=({onGetPostList})=>{
    return(
        <div className="heading-container">
            <div>
                 <h1 >There is No Posts available</h1>
           <button type="button" className="btn btn-primary" onClick={onGetPostList}>Get Post From Server</button>
            </div>
           
        </div>
    )
}
export default EmptyMessage;