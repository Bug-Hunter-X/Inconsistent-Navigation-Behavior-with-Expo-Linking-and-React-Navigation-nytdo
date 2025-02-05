The issue was resolved by using a more controlled approach to update the navigation state after handling the deep link in `Linking.addEventListener`. Instead of directly calling navigation actions within the event listener, the navigation update is scheduled with `setTimeout` to allow for the React context to update. This introduces a small delay, but ensures that navigation updates occur consistently.

```javascript
import * as Linking from 'expo-linking';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

function MyComponent() {
  const navigation = useNavigation();

  useEffect(() => {
    const handleUrl = (url) => {
      setTimeout(() => {
        // Parse the URL and navigate accordingly
        const parsedUrl = new URL(url);
        const routeName = parsedUrl.pathname.substring(1);
        navigation.navigate(routeName); //Ensure navigate happens after context update
      }, 0);
    };

    const subscription = Linking.addEventListener('url', ({ url }) => {
      handleUrl(url);
    });

    return () => subscription.remove();
  }, [navigation]);

  return (
    //Component UI
  );
}
```