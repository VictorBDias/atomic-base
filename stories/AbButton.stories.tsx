import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AtButton from '../src/components/AtButton';

export default {
  title: 'Componentes/AtButton',
  component: AtButton,
} as ComponentMeta<typeof AtButton>;

const Template: ComponentStory<typeof AtButton> = () => <AtButton />;

export const Primario = Template.bind({});
