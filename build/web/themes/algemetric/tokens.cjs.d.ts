export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "color": {
    "brand": {
      "primary": {
        "lighter": DesignToken,
        "light": DesignToken,
        "mid-light": DesignToken,
        "medium": DesignToken,
        "mid-dark": DesignToken,
        "dark": DesignToken,
        "darker": DesignToken
      },
      "secondary": {
        "lighter": DesignToken,
        "light": DesignToken,
        "mid-light": DesignToken,
        "medium": DesignToken,
        "mid-dark": DesignToken,
        "dark": DesignToken,
        "darker": DesignToken
      }
    },
    "chart": {
      "1": DesignToken,
      "2": DesignToken,
      "3": DesignToken,
      "4": DesignToken,
      "5": DesignToken,
      "6": DesignToken,
      "7": DesignToken,
      "8": DesignToken,
      "9": DesignToken,
      "10": DesignToken,
      "11": DesignToken,
      "12": DesignToken
    },
    "feedback": {
      "error": {
        "pure": DesignToken,
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "warning": {
        "pure": DesignToken,
        "lighter": DesignToken,
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "helper": {
        "pure": DesignToken,
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "success": {
        "pure": DesignToken,
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      }
    },
    "highlight": {
      "pure": DesignToken,
      "light": DesignToken,
      "medium": DesignToken,
      "dark": DesignToken
    },
    "background": {
      "layout": {
        "pure": DesignToken
      }
    },
    "text": {
      "layout": {
        "pure": DesignToken
      }
    },
    "neutral": {
      "low": {
        "pure": DesignToken,
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "high": {
        "pure": DesignToken,
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      }
    },
    "avatar": {
      "background": DesignToken,
      "color": DesignToken
    },
    "button": {
      "base": {
        "background": {
          "disabled": DesignToken
        },
        "text": {
          "disabled": DesignToken
        },
        "border": {
          "focus": DesignToken
        }
      },
      "primary": {
        "background": {
          "default": DesignToken,
          "hover": DesignToken,
          "pressed": DesignToken
        },
        "text": {
          "default": DesignToken
        }
      },
      "secondary": {
        "background": {
          "default": DesignToken,
          "hover": DesignToken,
          "pressed": DesignToken
        },
        "text": {
          "default": DesignToken
        }
      },
      "ghost": {
        "background": {
          "hover": DesignToken,
          "pressed": DesignToken
        },
        "text": {
          "default": DesignToken
        }
      }
    },
    "field": {
      "base": {
        "placeholder": DesignToken,
        "text": DesignToken,
        "border": {
          "default": DesignToken,
          "hover": DesignToken,
          "focus": DesignToken,
          "active": DesignToken
        },
        "arrow": DesignToken
      },
      "disabled": {
        "placeholder": DesignToken,
        "background": DesignToken,
        "border": DesignToken,
        "text": DesignToken,
        "arrow": DesignToken
      },
      "error": {
        "border": DesignToken,
        "arrow": DesignToken
      }
    },
    "helper": {
      "error": {
        "text": DesignToken
      },
      "disabled": {
        "text": DesignToken
      }
    },
    "label": {
      "base": {
        "text": DesignToken
      },
      "disabled": {
        "text": DesignToken
      }
    },
    "modal": {
      "dialog": {
        "background": DesignToken,
        "text": DesignToken,
        "header": {
          "close-icon": DesignToken
        }
      }
    },
    "progress-bar": {
      "background": DesignToken
    },
    "card": {
      "border": DesignToken
    },
    "divider": {
      "base": DesignToken
    },
    "header": {
      "background": DesignToken,
      "text": DesignToken
    },
    "table": {
      "background": DesignToken
    },
    "link": {
      "base": {
        "text": {
          "default": DesignToken,
          "active": DesignToken
        },
        "border": {
          "focus": DesignToken
        }
      }
    },
    "tag": {
      "base": {
        "text": {
          "default": DesignToken
        },
        "background": {
          "default": DesignToken
        }
      }
    }
  },
  "asset": {
    "font": {
      "family": DesignToken
    }
  },
  "font": {
    "family": DesignToken,
    "weight": {
      "regular": DesignToken,
      "semiBold": DesignToken,
      "bold": DesignToken
    },
    "style": {
      "normal": DesignToken
    },
    "line-height": {
      "default": DesignToken,
      "xs": DesignToken,
      "sm": DesignToken,
      "md": DesignToken,
      "lg": DesignToken,
      "xl": DesignToken,
      "xxl": DesignToken
    },
    "avatar": {
      "weight": DesignToken,
      "line-height": DesignToken
    },
    "button": {
      "weight": DesignToken
    },
    "heading": {
      "line-height": {
        "xs": DesignToken,
        "sm": DesignToken,
        "md": DesignToken,
        "lg": DesignToken,
        "xl": DesignToken,
        "2xl": DesignToken,
        "display": DesignToken
      },
      "weight": {
        "xs": DesignToken,
        "sm": DesignToken,
        "md": DesignToken,
        "lg": DesignToken,
        "xl": DesignToken,
        "2xl": DesignToken,
        "display": DesignToken
      }
    },
    "paragraph": {
      "line-height": {
        "sm": DesignToken,
        "md": DesignToken,
        "lg": DesignToken
      }
    },
    "subtitle": {
      "line-height": {
        "xs": DesignToken,
        "sm": DesignToken,
        "md": DesignToken,
        "lg": DesignToken,
        "xl": DesignToken
      },
      "weight": {
        "xs": DesignToken,
        "sm": DesignToken,
        "md": DesignToken,
        "lg": DesignToken,
        "xl": DesignToken
      }
    },
    "tag": {
      "weight": DesignToken
    }
  },
  "effect": {
    "opacity": {
      "semi-opaque": DesignToken,
      "intense": DesignToken,
      "medium": DesignToken,
      "light": DesignToken,
      "semi-transparent": DesignToken
    },
    "scale": {
      "sm": DesignToken,
      "md": DesignToken,
      "lg": DesignToken
    },
    "shadow": {
      "box": {
        "md": DesignToken,
        "lg": DesignToken,
        "xl": DesignToken,
        "2xl": DesignToken
      }
    },
    "transition": {
      "duration": {
        "slow": DesignToken,
        "default": DesignToken
      },
      "type": {
        "fade-in": DesignToken,
        "fade-out": DesignToken
      },
      "default": DesignToken
    },
    "modal": {
      "shadow": {
        "box": DesignToken
      },
      "dialog": {
        "transition": DesignToken,
        "opened": {
          "opacity": DesignToken,
          "transform": DesignToken
        },
        "closed": {
          "opacity": DesignToken,
          "transform": DesignToken
        }
      }
    },
    "card": {
      "shadow": {
        "box": DesignToken
      }
    },
    "header": {
      "shadow": {
        "box": DesignToken
      }
    }
  },
  "size": {
    "border": {
      "width": {
        "none": DesignToken,
        "hairline": DesignToken,
        "thin": DesignToken,
        "thick": DesignToken,
        "heavy": DesignToken
      },
      "radius": {
        "none": DesignToken,
        "sm": DesignToken,
        "md": DesignToken,
        "lg": DesignToken,
        "pill": DesignToken,
        "circular": DesignToken
      }
    },
    "font": {
      "xs": DesignToken,
      "sm": DesignToken,
      "default": DesignToken,
      "lg": DesignToken,
      "xl": DesignToken,
      "2xl": DesignToken,
      "3xl": DesignToken,
      "4xl": DesignToken,
      "5xl": DesignToken,
      "6xl": DesignToken,
      "7xl": DesignToken
    },
    "screen": {
      "sm": DesignToken,
      "md": DesignToken,
      "lg": DesignToken,
      "xl": DesignToken,
      "2xl": DesignToken
    },
    "spacing": {
      "xs": DesignToken,
      "sm": DesignToken,
      "md": DesignToken,
      "lg": DesignToken,
      "xl": DesignToken,
      "2xl": DesignToken,
      "3xl": DesignToken,
      "4xl": DesignToken,
      "5xl": DesignToken,
      "6xl": DesignToken,
      "7xl": DesignToken,
      "8xl": DesignToken,
      "9xl": DesignToken
    },
    "avatar": {
      "width": DesignToken,
      "height": DesignToken,
      "font": DesignToken,
      "border": {
        "radius": DesignToken
      }
    },
    "button": {
      "base": {
        "font": DesignToken,
        "border-radius": DesignToken,
        "height": DesignToken,
        "padding-horizontal": DesignToken
      },
      "focus": {
        "border-width": DesignToken
      }
    },
    "field": {
      "base": {
        "font": DesignToken,
        "padding": {
          "x": DesignToken,
          "y": DesignToken
        },
        "border-width": DesignToken,
        "border-radius": DesignToken
      },
      "text": {
        "height": DesignToken
      },
      "multiline": {
        "height": DesignToken
      },
      "select": {
        "padding-right": DesignToken,
        "arrow": {
          "width": DesignToken,
          "half-width": DesignToken,
          "spacing": DesignToken
        }
      }
    },
    "form": {
      "gap": DesignToken,
      "footer": {
        "padding": DesignToken
      }
    },
    "modal": {
      "width": {
        "max": DesignToken
      },
      "spacing": {
        "vertical": DesignToken,
        "horizontal": DesignToken
      },
      "border": {
        "radius": DesignToken
      },
      "progress-bar": {
        "spacing": DesignToken
      }
    },
    "progress-bar": {
      "height": DesignToken
    },
    "card": {
      "border": {
        "width": DesignToken,
        "radius": DesignToken
      },
      "padding": {
        "md": DesignToken
      }
    },
    "chart-card": {
      "wrapper": {
        "spacing": DesignToken
      },
      "header": {
        "spacing": DesignToken
      }
    },
    "divider": {
      "height": DesignToken,
      "margin": DesignToken
    },
    "header": {
      "height": DesignToken,
      "padding": DesignToken,
      "logo": {
        "gap": DesignToken
      },
      "actions": {
        "gap": DesignToken
      }
    },
    "table": {
      "wrapper": {
        "border-radius": DesignToken,
        "padding": DesignToken
      },
      "column": {
        "padding": DesignToken,
        "min-width": DesignToken
      }
    },
    "heading": {
      "font": {
        "xs": DesignToken,
        "sm": DesignToken,
        "md": DesignToken,
        "lg": DesignToken,
        "xl": DesignToken,
        "2xl": DesignToken,
        "display": DesignToken
      }
    },
    "link": {
      "focus": {
        "border-width": DesignToken,
        "border-radius": DesignToken
      }
    },
    "paragraph": {
      "font": {
        "sm": DesignToken,
        "md": DesignToken,
        "lg": DesignToken
      }
    },
    "subtitle": {
      "font": {
        "xs": DesignToken,
        "sm": DesignToken,
        "md": DesignToken,
        "lg": DesignToken,
        "xl": DesignToken
      }
    },
    "tag": {
      "font": DesignToken,
      "border-radius": DesignToken,
      "padding": DesignToken
    },
    "title-group": {
      "gap": DesignToken
    }
  },
  "unit": {
    "percentage": {
      "50": DesignToken,
      "100": DesignToken
    }
  }
}