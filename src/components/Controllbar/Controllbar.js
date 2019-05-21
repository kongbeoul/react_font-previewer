import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFont, changeFontSize } from "../../reducers/control";

import IconFontSize from "../../assets/images/icon_font_size.png";
import btnDown from "../../assets/images/btn_down.png";
import "./Controllbar.css";

const FontList = [
  {
    optgroup: "NotoSans",
    options: [
      {
        value: "NotoSansLight",
        name: "NotoSans Light"
      },
      {
        value: "NotoSansRegular",
        name: "NotoSans Regular"
      },
      {
        value: "NotoSansMedium",
        name: "NotoSans Medium"
      },
      {
        value: "NotoSansBold",
        name: "NotoSans Bold"
      }
    ]
  },
  {
    optgroup: "Roboto",
    options: [
      {
        value: "RobotoLight",
        name: "Roboto Light"
      },
      {
        value: "RobotoRegular",
        name: "Roboto Regular"
      },
      {
        value: "RobotoMedium",
        name: "Roboto Medium"
      },
      {
        value: "RobotoBold",
        name: "Roboto Bold"
      }
    ]
  },
  {
    optgroup: "나눔고딕",
    options: [
      {
        value: "NanumGothicLight",
        name: "나눔고딕 Light"
      },
      {
        value: "NanumGothicBold",
        name: "나눔고딕 Bold"
      }
    ]
  },
  {
    optgroup: "나눔바른고딕",
    options: [
      {
        value: "NanumBarunGothicLight",
        name: "나눔바른고딕 Light"
      },
      {
        value: "NanumBarunGothicRegular",
        name: "나눔바른고딕 Regular"
      },
      {
        value: "NanumBarunGothicBold",
        name: "나눔바른고딕 Bold"
      }
    ]
  },
  {
    optgroup: "나눔스퀘어",
    options: [
      {
        value: "NanumSquareLight",
        name: "나눔스퀘어 Light"
      },
      {
        value: "NanumSquareRegular",
        name: "나눔스퀘어 Regular"
      },
      {
        value: "NanumSquareBold",
        name: "나눔스퀘어 Bold"
      }
    ]
  },
  {
    optgroup: "SpoqaHanSans",
    options: [
      {
        value: "SpoqaHanSansLight",
        name: "SpoqaHanSans Light"
      },
      {
        value: "SpoqaHanSansRegular",
        name: "SpoqaHanSans Regular"
      },
      {
        value: "SpoqaHanSansBold",
        name: "SpoqaHanSans Bold"
      }
    ]
  },
  {
    optgroup: "Lato",
    options: [
      {
        value: "LatoLight",
        name: "Lato Light"
      },
      {
        value: "LatoRegular",
        name: "Lato Regular"
      },
      {
        value: "LatoBold",
        name: "Lato Bold"
      }
    ]
  }
];

const Controllbar = () => {
  const { size, font } = useSelector(state => state);
  const dispatch = useDispatch();

  const onFontSizeChange = useCallback(e => {
    dispatch(changeFontSize(e.target.value));
  });

  const onFontChange = useCallback(e => {
    dispatch(changeFont(e.target.value));
  });

  useEffect(() => {
    dispatch(changeFont(FontList[0].options[0].value));
  }, []);

  return (
    <div className="Controllbar">
      <div className="Controllbar__Size">
        <img src={IconFontSize} className="Controllbar__Size__Icon" />
        <input
          type="range"
          min="17"
          max="100"
          value={size}
          onChange={onFontSizeChange}
        />
      </div>
      <div className="Controllbar__Select">
        <select value={font} onChange={onFontChange}>
          {FontList.map(v => (
            <optgroup
              key={v.optgroup}
              label={v.optgroup}
              className={v.options[v.options.length - 1].value}
            >
              {v.options.map(_v => (
                <option value={_v.value} key={_v.name} className={_v.value}>
                  {_v.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <span className="btn__down">
          <img src={btnDown} />
        </span>
      </div>
    </div>
  );
};

export default Controllbar;
