import CommentCard from "./CommentCard"
function CommentContainer({comments}) {

    const itemComments = comments.map(comment => {

        return (
           <CommentCard
           key={comment.id}
           comment={comment}
           />

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