import React from 'react';

import { Container, Contain, InputStuff, Progress, CaptionInput, PostButton } from './styles/imageUpload';

export default function ImageUpload({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

ImageUpload.Contain = function ImageUploadContain({ children, ...restProps }) {
    return <Contain>{children}</Contain>
}

ImageUpload.InputStuff = function ImageUploadInputStuff({ handleChange, children, ...restProps }) {
    return (
        <InputStuff {...restProps}>
            <input type="file" name="file-1[]" id="file-1" data-multiple-caption="{count} files selected" multiple onChange={handleChange} />
            <label for="file-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
                </svg> 
                {children}
            </label>
        </InputStuff>
    )
}

ImageUpload.CaptionInput = function ImageUploadCaptionInput({ setCaption, caption, children, ...restProps }) {
    return <CaptionInput type="text" placeholder='Enter a caption...' onChange={event => setCaption(event.target.value)} value={caption} />
}

ImageUpload.Progress = function ImageUploadProgress({ progress, children, ...restProps }) {
    return <Progress value={progress} max="100" />
}

ImageUpload.PostButton = function ImageUploadPostButton({ handleUpload, image, children, ...restProps }) {
    return <PostButton onClick={handleUpload} disabled={!image}>Post!</PostButton>
}