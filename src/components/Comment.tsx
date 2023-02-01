import React, { useEffect, useState } from "react";
import EmojiPicker, { Emoji, EmojiClickData } from "emoji-picker-react";
import styled from "styled-components";

import { dbService } from "../firebase";
import { Label } from "../pages/About";

const Base = styled.div`
  width: 100%;
  position: relative;
`;
const CommentInputWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 10fr 1fr;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: 0 0 10px rgba(9, 9, 9, 0.1);
  backdrop-filter: blur(25px);
  padding: 1rem 2rem;
  grid-gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
`;
const EmojiPickerWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 100px;
`;
const EmojiBtn = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
  border-radius: 50%;
  margin-right: 20px;
  position: relative;
`;

const AddIcon = styled.span`
  &::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 16px;
    background-color: ${(props) => props.theme.color.textColor};
    display: block;
    top: 50%;
    transform: translateY(-50%);
  }
  &::before {
    position: absolute;
    content: "";
    width: 1px;
    height: 16px;
    background-color: ${(props) => props.theme.color.textColor};
    display: block;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
  }
`;
const CommentInput = styled.textarea`
  border: none;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 400;
  line-height: ${(props) => props.theme.fontSize.base};
  height: ${(props) => props.theme.fontSize.base};
  &::-webkit-scrollbar {
    display: none;
  }
`;
const SubmitBtn = styled.button``;
const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 300px;
  overflow-y: auto;
  padding: 1rem 2rem 1rem 0.2rem;
  align-items: center;
  width: 100%;
`;
const CommentItem = styled.li`
  display: flex;
  width: 100%;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: 0 0 10px rgba(9, 9, 9, 0.1);
  backdrop-filter: blur(25px);
  padding: 1rem 2rem;
  align-items: center;
`;
const CommentTextWrapper = styled.div``;
const CommentText = styled.p`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 600;
`;
const CommentDate = styled.p`
  margin-bottom: 5px;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
`;

type CommentProps = {
  createdAt: string;
  emoji: string;
  text: string;
  timestamp: number;
};

export default function Comment() {
  const [isOpenedEmojiPicker, setIsOpenedEmojiPicker] =
    useState<boolean>(false);
  const [commentObj, setCommentObj] = useState<CommentProps>({
    createdAt: "",
    emoji: "",
    text: "",
    timestamp: 0,
  });
  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    dbService
      .collection("comment")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const commentArr: any = snapshot.docs.map((comment) => ({
          ...comment.data(),
        }));
        setComments(commentArr);
      });
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentObj({
      ...commentObj,
      text: event.target.value,
    });
  };

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id === "emoji") {
      setIsOpenedEmojiPicker(true);
    } else {
      const now = Date.now();
      const date = new Date(now);
      const year = date.getFullYear().toString().slice(-4);
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const hour = ("0" + date.getHours()).slice(-2);
      const minute = ("0" + date.getMinutes()).slice(-2);
      const second = ("0" + date.getSeconds()).slice(-2);
      const returnDate =
        year +
        "년 " +
        month +
        "월 " +
        day +
        "일  " +
        hour +
        ":" +
        minute +
        ":" +
        second;

      await dbService.collection("comment").add({
        createdAt: returnDate,
        timestamp: now,
        emoji: commentObj.emoji,
        text: commentObj.text,
      });

      setCommentObj({
        ...commentObj,
        text: "",
        emoji: "",
      });
    }
  };

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setCommentObj({
      ...commentObj,
      emoji: emojiData.unified,
    });
    setIsOpenedEmojiPicker(!isOpenedEmojiPicker);
  };

  return (
    <Base>
      <Label>Comment</Label>
      <CommentInputWrapper>
        <EmojiBtn id="emoji" onClick={onClick}>
          {commentObj.emoji === "" ? (
            <AddIcon />
          ) : (
            <Emoji unified={commentObj.emoji} size={20} />
          )}
        </EmojiBtn>
        <CommentInput
          rows={1}
          spellCheck={false}
          value={commentObj?.text}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChange(event)
          }
          placeholder="| 포트폴리오 · 프로젝트 등에 대한 피드백을 작성해주시면 감사하겠습니다."
        />
        <SubmitBtn onClick={onClick}>등록</SubmitBtn>
      </CommentInputWrapper>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.timestamp}>
            <Emoji unified={comment.emoji} size={25} />
            <CommentTextWrapper>
              <CommentDate>{comment.createdAt}</CommentDate>
              <CommentText>{comment.text}</CommentText>
            </CommentTextWrapper>
          </CommentItem>
        ))}
      </CommentList>
      <EmojiPickerWrapper>
        {isOpenedEmojiPicker && (
          <EmojiPicker height={350} width="50%" onEmojiClick={onEmojiClick} />
        )}
      </EmojiPickerWrapper>
    </Base>
  );
}
