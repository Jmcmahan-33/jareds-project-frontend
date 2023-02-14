function CommentContainer({comments}) {

    const itemComments = comments.map(comment => {

        return (
            <div>
                
            </div>
        )
    })

    return (
        <div>
        <h2>COMMENTS</h2>
        {itemComments}
        </div>
    )
}

export default CommentContainer