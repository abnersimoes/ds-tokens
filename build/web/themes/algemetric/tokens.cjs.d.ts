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
      "1": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "2": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "3": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "4": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "5": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "6": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "7": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "8": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "9": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "10": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "11": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      },
      "12": {
        "light": DesignToken,
        "medium": DesignToken,
        "dark": DesignToken
      }
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
    "chip": {
      "background": DesignToken,
      "text": DesignToken,
      "icon": {
        "base": DesignToken,
        "hover": DesignToken
      }
    },
    "datepicker": {
      "predefined": {
        "border": DesignToken,
        "button": {
          "base": DesignToken,
          "hover": DesignToken
        }
      },
      "main": {
        "background": DesignToken,
        "border": DesignToken
      },
      "months": {
        "background": DesignToken,
        "header": {
          "text": DesignToken,
          "button": {
            "base": DesignToken,
            "hover": DesignToken
          }
        },
        "week-number": {
          "text": DesignToken
        }
      },
      "weekdays": {
        "text": DesignToken
      },
      "days": {
        "text": {
          "base": DesignToken,
          "hover": DesignToken
        },
        "highlighted": {
          "background": DesignToken
        },
        "locked": {
          "text": DesignToken
        }
      },
      "today": {
        "text": DesignToken
      },
      "range": {
        "background": DesignToken,
        "highlight": {
          "text": DesignToken,
          "background": DesignToken
        }
      },
      "tooltip": {
        "background": DesignToken
      }
    },
    "checkbox": {
      "base": {
        "label": {
          "text": DesignToken
        },
        "input": {
          "text": DesignToken,
          "border": DesignToken
        }
      },
      "hover": {
        "input": {
          "border": DesignToken
        }
      },
      "checked": {
        "input": {
          "background": DesignToken,
          "border": DesignToken
        },
        "hover": {
          "input": {
            "background": DesignToken,
            "border": DesignToken
          }
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
    "loading-overlay": {
      "background": DesignToken,
      "text": DesignToken
    },
    "backdrop": {
      "background": DesignToken
    },
    "modal": {
      "dialog": {
        "background": DesignToken,
        "text": DesignToken
      }
    },
    "progress-bar": {
      "background": DesignToken
    },
    "card": {
      "background": DesignToken,
      "border": DesignToken
    },
    "chart-types": {
      "card": {
        "checked": {
          "background": DesignToken
        },
        "disabled": {
          "icon": DesignToken
        }
      }
    },
    "divider": {
      "base": DesignToken
    },
    "header": {
      "background": DesignToken,
      "text": DesignToken
    },
    "menu": {
      "box": {
        "border": DesignToken
      },
      "item": {
        "icon": DesignToken,
        "default": {
          "background": DesignToken,
          "text": DesignToken
        },
        "hover": {
          "background": DesignToken
        },
        "active": {
          "text": DesignToken
        },
        "selected": {
          "background": DesignToken
        },
        "disabled": {
          "text": DesignToken
        }
      }
    },
    "table": {
      "background": DesignToken
    },
    "svg-gradient": {
      "background": {
        "1": {
          "start": DesignToken,
          "end": DesignToken
        },
        "2": {
          "start": DesignToken,
          "end": DesignToken
        },
        "3": {
          "start": DesignToken,
          "end": DesignToken
        }
      }
    },
    "toast": {
      "icon": {
        "fill": DesignToken,
        "success": DesignToken,
        "warning": DesignToken,
        "error": DesignToken
      }
    },
    "tooltip": {
      "background": DesignToken,
      "text": DesignToken
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
      "sans": DesignToken,
      "mono": DesignToken
    }
  },
  "font": {
    "sans": {
      "family": DesignToken,
      "weight": {
        "regular": DesignToken,
        "semiBold": DesignToken,
        "bold": DesignToken
      },
      "style": {
        "normal": DesignToken
      }
    },
    "mono": {
      "family": DesignToken,
      "weight": {
        "regular": DesignToken
      },
      "style": {
        "normal": DesignToken
      }
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
    "datepicker": {
      "today": {}
    },
    "checkbox": {
      "label": {
        "size": DesignToken,
        "weight": DesignToken
      }
    },
    "field": {
      "chips": {
        "textarea": {
          "line-height": DesignToken
        }
      }
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
    "datepicker": {
      "main": {
        "shadow": {
          "box": DesignToken
        }
      }
    },
    "backdrop": {
      "filter": DesignToken,
      "transition": DesignToken
    },
    "modal": {
      "transition": DesignToken,
      "dialog": {
        "shadow": {
          "box": DesignToken
        },
        "opened": {
          "transform": DesignToken
        },
        "closed": {
          "transform": DesignToken
        }
      }
    },
    "card": {
      "shadow": {
        "box": DesignToken
      }
    },
    "dropdown": {
      "transition": DesignToken,
      "transform": {
        "movement": DesignToken,
        "start": DesignToken,
        "end": DesignToken
      }
    },
    "header": {
      "shadow": {
        "box": DesignToken
      }
    },
    "menu": {
      "item": {
        "transition": DesignToken
      }
    },
    "toast": {
      "transition": DesignToken
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
        "padding-horizontal": DesignToken,
        "column-gap": DesignToken
      },
      "focus": {
        "border-width": DesignToken
      }
    },
    "chip": {
      "height": DesignToken,
      "padding": DesignToken,
      "gap": DesignToken,
      "border-radius": DesignToken,
      "icon": DesignToken
    },
    "datepicker": {
      "predefined": {
        "width": DesignToken,
        "padding": DesignToken,
        "gap": DesignToken
      },
      "main": {
        "border-radius": DesignToken
      },
      "months": {
        "padding": DesignToken,
        "gap": DesignToken,
        "header": {
          "height": DesignToken,
          "margin-bottom": DesignToken,
          "padding": DesignToken,
          "button": {
            "size": DesignToken
          }
        }
      },
      "weekdays": {
        "size": DesignToken
      },
      "days": {
        "width": DesignToken
      }
    },
    "checkbox": {
      "column-gap": DesignToken,
      "input": {
        "border": DesignToken,
        "border-radius": DesignToken,
        "height": DesignToken,
        "width": DesignToken
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
      "group": {
        "gap": DesignToken
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
      },
      "chips": {
        "items": {
          "gap": DesignToken
        },
        "height": {
          "min": DesignToken,
          "max": DesignToken
        },
        "textarea": {
          "width": {
            "min": DesignToken
          }
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
        "max": DesignToken,
        "video-max": DesignToken
      },
      "spacing": {
        "vertical": DesignToken,
        "horizontal": DesignToken,
        "button-close": DesignToken
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
    "chart-types": {
      "gap": DesignToken,
      "card": {
        "min-width": DesignToken,
        "height": DesignToken,
        "border-radius": DesignToken
      },
      "dropdown": {
        "button": {
          "padding": {
            "left": DesignToken,
            "right": DesignToken
          }
        },
        "menu": {
          "width": DesignToken,
          "gap": DesignToken,
          "padding": DesignToken,
          "grid-fix": DesignToken
        }
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
    "menu": {
      "item": {
        "height": DesignToken,
        "padding": DesignToken,
        "gap": DesignToken,
        "icon": DesignToken
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
    "toast": {
      "max-size": DesignToken,
      "gap": DesignToken,
      "icon": {
        "width": DesignToken,
        "border": {
          "radius": DesignToken
        }
      },
      "transition": {
        "movement": DesignToken
      }
    },
    "tooltip": {
      "border-radius": DesignToken,
      "padding": DesignToken,
      "gap": DesignToken,
      "arrow": DesignToken
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
        "xs": DesignToken,
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
