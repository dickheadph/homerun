import Outline from './Shared/Outline';
import Title from './Shared/Title';
import CardTestimonial from './card-testimonial';
const Testimonials = () => {
  return (
    <div className='mx-3'>
      <Outline>
        <Title title='Testimonials' />
        <CardTestimonial />
      </Outline>
    </div>
  );
};

export default Testimonials;
