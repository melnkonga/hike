import React from "react";
import "./UserPostComponent.css";

const UserPostComponent = () => {
  return (
    <div className="user_post">
      <div className="user_post__header">
        <div className="user_post__header__avatar">
          <img
            src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
            alt="user"
            className="user_post__header__avatar__image"
          />
        </div>
        <div className="user_post__header__name">
          <h3>john.doe</h3>
        </div>
      </div>
      <div className="user_post__body">
        <img
          src="https://www.alibabuy.com/photos/library/1500/25796.jpg"
          alt="post"
          className="user_post__body__image"
        />
        <div className="user_post__body__legend">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
        </div>
      </div>
      <div className="user_post__footer">
        <div className="user_post__footer__likes">
          <p>100 likes</p>
        </div>
        <div className="user_post__footer__comments">
          <p>100 comments</p>
        </div>
      </div>
    </div>
  );
};

export default UserPostComponent;
