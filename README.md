# [Bug] onBlur is not firing in IOS Chrome when trigger done button

### Version
- react: 18.2.0
- react-dom: 18.2.0
- test device version: Iphone X(IOS 16.3)

### Expectation
- Clicking the DONE button on the IOS keyboard, I expected the blur to be triggered by losing focus on the html Input Element.

### Result
- The onBlur event is not fired.

### Detailed description:
- After the done button on the keypad was clicked, the html was blurred but react's onBlur was not fired
- If you apply blur as a native event instead of react onBlur, it works fine.
- IOS, Android Other Browsers onBlur behavior

https://github.com/youryu0212/react-blur-sample/assets/87521172/517787aa-4856-4eb4-a416-eb0c8db3a62d
https://github.com/youryu0212/react-blur-sample/assets/87521172/71ff622b-e982-4bcc-98c3-fd25b17aef3e

