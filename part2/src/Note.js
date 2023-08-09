export const Note = ({ id, content, date }) => {
    return (
        <li key={id}>
            <p>{content}</p>
            <small>
                <time>{date}</time>
            </small>
        </li>
    );
};