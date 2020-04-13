interface ScreenProp {
  navigation: {
    goBack: () => void
    push: (routeName: string, params?: any) => void
    getParam: (paramName: string, defaultValue?: any) => any
    navigate: (routeName: string, params?: any) => void
    replace: (routeName: string, params?: any) => void
    state: {
      routeName: string
      key: string
      params: any
    }
  }
}

interface TextProp {
  fontSize?: number,
  color?: string,
  fontFamily: string,
  top?: number,
}

interface ComponentProp {
  children: any
}

interface ButtonProp {
  buttonText: string,
  height: number,
  width: number,
  bottom: number,
  backgroundColor: string,
  buttonTextColor: string,
  onPress: function
}

interface TextInputProp {
  placeholder: string,
  height: number,
  width: number,
  icons?: Array,
}
