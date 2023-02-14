import CommentCard from "./CommentCard"
import NewComment from "./NewComment"
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
        <NewComment/>
        </div>
    )
}

export default CommentContainer