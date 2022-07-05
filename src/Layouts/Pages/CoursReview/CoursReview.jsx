import React, { Component } from "react";
import "./CoursReview.css";

import { AiFillStar } from "react-icons/ai";
import { HiOutlineChevronRight } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";

class CoursReview extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="cours-review-main-container">
                <div className="cours-review-title">
                    <div className="cours-review-main-title">
                        Summer Art Camp! 5Days of Artists and Painting Monet,
                        Van Gough, Matisse & More.
                    </div>
                    <div className="cours-review-sub-main-title">
                        Multi-Day Course &#63;
                    </div>
                </div>
                <div className="cours-review-body">
                    <div className="cours-review-body-left">
                        <div className="cours-class-decription">
                            In this 5 day class we will explore artists Monet,
                            Matisse, Van Gough, among others and then recreate
                            paintings using crayon and watercolor.Student will
                            have fun learning about the artists & creating their
                            own art inspired by their work.
                        </div>
                        <div className="cours-class-teacher">
                            <div className="cours-class-teacher-image">
                                <img
                                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="teacher"
                                />
                            </div>
                            <div className="cours-class-teacher-name">
                                Kimberly R Moseler
                            </div>
                        </div>
                        <div className="cours-class-teacher-review">
                            <div className="cours-class-teacher-review-star">
                                <AiFillStar className="start-icon" />
                                <AiFillStar className="start-icon" />
                                <AiFillStar className="start-icon" />
                                <AiFillStar className="start-icon" />
                                <AiFillStar className="start-icon" />
                            </div>
                            <div className="cours-class-teacher-review-descripton">
                                647 total reviews for this
                            </div>
                        </div>
                        <div className="cours-class-teacher-review">
                            <div className="cours-class-teacher-review-star">
                                <AiFillStar className="start-icon" />
                                <AiFillStar className="start-icon" />
                                <AiFillStar className="start-icon" />
                                <AiFillStar className="start-icon" />
                                <AiFillStar className="start-icon" />
                            </div>
                            <div className="cours-class-teacher-review-descripton">
                                5 reviews for this class
                            </div>
                        </div>
                        {/* <div className="cours-class-review"></div> */}
                        <div className="cours-class-completed">
                            Completed by 21 learners
                        </div>
                        <div className="cours-class-shedule">
                            <div className="cours-class-shedule-container">
                                <div className="cours-class-shedule-container-text">
                                    See class schedule
                                </div>
                                <div className="cours-class-shedule-container-icon">
                                    <HiOutlineChevronRight className="right-icon" />
                                </div>
                            </div>
                            <div className="cours-class-shedule-heart-icon">
                                <BsHeart className="heart-icon" />
                                <div className="cours-class-shedule-save-text">
                                    Save
                                </div>
                            </div>
                            <div className="cours-class-shedule-heart-icon">
                                <RiShareForwardLine className="heart-icon" />
                                <div className="cours-class-shedule-save-text">
                                    Share
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cours-review-body-right">
                        <div className="cours-review-body-right-image-right">
                            <img
                                src="https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="best scene emage"
                            />
                        </div>
                        <div className="cours-review-body-right-image-left">
                            <img
                                src="https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                            />
                            <img
                                src="https://images.pexels.com/photos/1064162/pexels-photo-1064162.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursReview;
