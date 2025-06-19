import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from  'axios';
import './Signup.css';
import {baseUrl} from '../../helper/common';
import {v4 as uuidv4 } from 'uuid';

const Signup = ({ setIsAuthenticated }) => 
    {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        Phone: '',
        Role: 'user',
        address: '',
        unique_ID: uuidv4()
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
         if(!formData.Phone.trim()) newErrors.Phone = 'Phone number is required';
         if(!formData.address.trim()) newErrors.address = 'Address is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const signupAPI = async (data) => {
         const response = await axios.post(`${baseUrl}/signup`, {
    
            Name: data.name,
            Email: data.email,  
            Password: data.password,
            Phone: data.Phone,
            Role: data.Role,
            Address: data.address,
            Unique_ID: data.unique_ID
        });
        return response.data;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                // Simulate API call to your backend
                 const response = await axios.post(`${baseUrl}/signup`, formData);

                // On successful signup
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('user', JSON.stringify(response.user));
                setIsAuthenticated(true);
                navigate('/dashboard');
            } catch (error) {
                setErrors({
                    ...errors,
                    form: error.message || 'Signup failed. Please try again.'
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

   

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Create Your Account</h2>
                <p className="subtitle">Join our community today</p>

                {errors.form && <div className="error-message">{errors.form}</div>}

                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                            required
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                            required
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? 'error' : ''}
                            required
                            minLength="6"
                        />
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={errors.confirmPassword ? 'error' : ''}
                            required
                        />
                        {errors.confirmPassword && (
                            <span className="error-text">{errors.confirmPassword}</span>
                        )}
                    </div>
                      <div className="form-group">
                        <label htmlFor="Phone">Phone</label>
                        <input
                            type="text"
                            id="Phone"
                            name="Phone"
                            value={formData.Phone}
                            onChange={handleChange}
                            className={errors.Phone ? 'error' : ''}
                            required
                        />
                        {errors.Phone && (
                            <span className="error-text">{errors.Phone}</span>
                        )}
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className={errors.address ? 'error' : ''}
                            required
                        />
                        {errors.address && (
                            <span className="error-text">{errors.address}</span>
                        )}
                        </div>

                    <button
                        type="submit"
                        className="signup-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner"></span> Creating Account...
                            </>
                        ) : (
                            'Sign Up'
                        )}
                    </button>
                </form>

                <div className="login-link">
                    Already have an account? <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    );
};
    
export default Signup;