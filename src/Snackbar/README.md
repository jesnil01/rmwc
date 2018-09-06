# Snackbars

> Snackbars provide brief feedback about an operation through a message at the bottom of the screen.

- import from **rmwc/Snackbar**  
- import styles from **@material/snackbar/dist/mdc.snackbar.css**
- [https://material.io/develop/web/components/snackbars/](https://material.io/develop/web/components/snackbars/)

```jsx render
import { Snackbar } from 'rmwc/Snackbar';
import { Button } from 'rmwc/Button';

{/* A standard snackbar */}
<Snackbar
  show={this.state.snackbarIsOpen}
  onHide={evt => this.setState({snackbarIsOpen: false})}
  message="This is a new message"
  actionText="Action"
  actionHandler={() => alert('Action clicked')}
  dismissesOnAction={false}
/>

<Button
  raised
  onClick={evt => this.setState({snackbarIsOpen: !this.state.snackbarIsOpen})}
>
  Show snackbar
</Button>

{/* A snackbar that is start aligned on larger devices. */}
<Snackbar
  show={this.state.snackbarStartIsOpen}
  onHide={evt => this.setState({snackbarStartIsOpen: false})}
  message="Start aligned"
  actionText="Dismiss"
  actionHandler={() => {}}
  alignStart
/>

<Button
  onClick={evt => this.setState({snackbarStartIsOpen: !this.state.snackbarStartIsOpen})}
>
  Show start-aligned
</Button>
```

```jsx renderOnly
import { DocumentComponent } from 'rmwc/Base/utils/DocumentComponent';

<DocumentComponent displayName="Snackbar" />
```