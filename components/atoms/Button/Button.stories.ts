import Button from '~/components/atoms/Button/Button.vue'

export default {
  title: 'Atoms/Button',
  component: Button
}

export const Default = () => ({
  components: { Button },
  template: '<Button>Default</Button>'
})

export const Small = () => ({
  components: { Button },
  template: '<Button font-size="sm">Small</Button>'
})

export const Large = () => ({
  components: { Button },
  template: '<Button font-size="lg">Large</Button>'
})

export const Red = () => ({
  components: { Button },
  template: '<Button color="red">Red</Button>'
})

export const Green = () => ({
  components: { Button },
  template: '<Button color="green">Green</Button>'
})
