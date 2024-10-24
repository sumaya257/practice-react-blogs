
import PropTypes from 'prop-types'; // ES6
const Blog = ({blog}) => {
    const{title}=blog
    return (
        <div>
            <h2 className='text-4xl'>{title}</h2>
            <img src='' alt='' ></img>
           </div>
    );
};
Blog.proptypes={
    blog: PropTypes.object.isRequired
}

export default Blog;