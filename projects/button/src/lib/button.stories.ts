import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'UiButton',
} as Meta;

const Template: Story<ButtonComponent> = args => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  text: 'Hello'
};
