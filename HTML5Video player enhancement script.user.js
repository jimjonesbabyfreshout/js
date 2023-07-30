// ==UserScript==

// @name:en HTML5 video player enhanced script

// @namespace https://github.com/xxxily/h5player

// @homepage https://github.com/xxxily/h5player

// @version 3.7.8

// @description:en Video enhancement script, supports all H5 video websites, such as: Bilibili, Dou Yin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEas E Open Course, Baidu network disk, Alibaba cloud disk, ted, instagram, twitter, etc. Full shortcut key control, support: double-speed playback/accelerated playback, video screenshots, p Icture-in-picture, full-screen web pages, adjusting brightness, saturation, contrast

// @author ankvps

// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEUAAAAZo +IiqNkXlMx+xs+Kw947ueyq5fAomMlTude76OnJ5uo6o8BrvuB0u9SIzNdFo8sjpcIom7IurODa698PjcBW0uxAoMocp90xjsR+v 9zS2c3j6+UznbP5//uYtK3/7dNHn9DL9PbM9vYDqe0Cq+sDqO0Ipu0Cqu8Eqe8CqeYGpvAMpuMArun//////+//7/////0 P8ArPUHqOr/+/P/+/cBrPDs////+PsCquj//voBqfP4/f/3//4Brvj1//cJqOX8/P4Bqvfw//8ArfsBrub//Pv+/vICp/cBrPMAr //5/vcDpf8KpekGqd0Bqv/y//oNp90BqfsFq+ALpOABp/L8//v//+jy///L0//8LptgCrez/9vYBsO4BoOL///YGpfYPoPYBm+ fEAnuoBleEBruEAsuoHpfrl//8CrdsBousHquMNot0EjdoNnNn0+/8BnPUMpO7/++0Qo+cBm9wYoOA+tNAFltAAovf5/u/A7/8Cr vL//+4Amu2c1OMCldcBn8gBnvwAlehxvcoBotoFqtICntL/9P3T9fAAtP8BlvFmvszd//sBs/QJpPIUnu0CseQAtPm+6fCj1uZL 9PR+/z+9u0BpuGx8/3s+vvS8vu89Pem5fcFjPRz0eoaoNgElMLa+Psfsu+y5OgEkcwQnv8Bl/zi+frG7/lHxu+J1OgAtuH//N tg6sNgDh8O68P7G+/uy6PKV2vA+t+kDsdf++OUjmd8AuOwtuOJkxdotodX6+P3p//eB3fde1+1ixe2k8Pem2fAVl+cZruRavd 9oGq8dMu+tc0uAiltXQ6vdMxtxAu9xSt9UboM6+/P4AvPn/7/Vxv+cQn76W5/p/ye2P5ecPlN4XrNen1dUnq8z/7/4Gi+gp 9Auqeuz0OdfteRHt8UDhbSj3+iLxuM7nuEiutFarLnt7/oTpfO+19mJucYelsEHnq0amPXp+udfoOd54OHN7N0Eus+u9+/N2PGex O8omu4fxL8ZpaEAzOwL7fbjAAAAJHRSTlMAzsj+hQSzWf6dcCf8fVE4n/36vRP149vMupcJBOnihEkHl8Lv/rxjAAAdpElEQVR42 ryWW2jTUBiAq9bpNqfzfr8np0nXiRwSKJRAqCGDtjYpSdeXjo4uXTtZb3RMWaHU1aHiRMV5YWq9TlGmIAw3mIo3vItXRJz6oCiII Kgvgj54UvG2qe3ysO+hTR7Of76c85///LrBTFs0T6dbXFpSotcXFxVNHa0ya5QmZuUGTy0qKtbrS0pKF6vBp+nyMXfBknFl5TPH 2k51hJHRKNRqTqHaRhU55CiCBQDhRozfmZ52bilC+blFZg4o+vqgJJOOl0OWTBAiAGAWYyasKhjMQAFrt3hTKaVgatdMybmmX5S+ flYuoJiGVnmPB7S42EoBIFrgkBD7YwHwXA852G5ivrY+fJJun8zds6ETG1dpFEURa8kea0EYU6ZEQRAYMQwwACCMOcg7BYJRUNBG 611tZkJc8b+8/Nnx8IdPsldFXK7RTQmYkEYjVYjXaEJGg01WhARFEx0uyNVbqmmoz42e9I/dn++yLucdJ/PoS4dAo9YVUwmwaAJA WWjVQW32yk7RbEOXx/tdMni/Il/y/450zf2pzg/qKRkjkXwvJnGMIgCNRlwTaCBBgMEGG3meRbByVQl8Msd/Znpc+YO2f6FcbY5L p5qoJxNJkGgaQzHGY5iGJvf7yerqiqHTVUViYbaGIbi7DiOQVoQTE1OquGUGG9m4wsHJ0LZIchAmsZxsgLQKIUg+njyB5hGyB+o0 QBaClBB4jgNSQYeKhu0/9NZgsYIkgQAx1ASDwJoAhsEiosDQJIEAe389D/yoHRKRiCxEYQUMlNKf0uA2Rv7o4IZGzHM4Wj/xtm/0 kAfkzvc9AguAUm7t9pi+p8FaHLAxZ3CR1IAP8W5ApN/FKTiTIfT34ADbMQAeIPf2ZEp1unU23HcmFofTVLEsE7WzydtBgRF0jW1Y 8blTsCMYF11X6XTgxcy/5+HU6sA7nFW9kl1sRnqSSjpClhFH9VkKCR3JFEF3VVR9NTY2OiVoCYFQxPlc1vru0rUHdjMbAg5ZBNNF CCASuX3iiIIOCq2VREjpkWAoE2yI7TBs1ndg7Ig5XWznIDlF6Dtrl84EOhP0wKgD+BYt8gFy1ARKm+jRDfFCiBf5qL9Jm02G2f7f scwqM9BT9qSAAgsEmDbisfqps1MeJAAT4O8+QcBZs21m2qDI0mmalNzczPUtAeAZlnRyyVmTtON++C0eUUkAPOtGpoKWnDUInV2d kZC7k6jkYaoaU0BOHwBSPOU6LU5x5fqSsa4ZEmi+PzSkMBJl9qrhusVJRyuDwSSsos3E0hCAzwlSbILVQJ9i4Pzein+v6ce3dMoR cOKElwdXXPtbHd3d29376s1A8GgUh8mzIAgQK4sqD9EwQJeztGiRwLtOQH872UPRYQ4MrCTitJmPntj7ZVsz+5NOY7szp65cX9rf VvAbEaGqH8BOISAKcgA5ynvd4HiVpYyRlDbSA6Z3RKhDUQqRdneN9fWtmzovfhw98M9Zy5eur5L5fXlgxev9GzZvef6g9agUlOT ISMqxyPGh5U2wsoaWrLa6TY1mJdUdzAoBfIkUPLFbRsD0WaZAff2Xr+ZM+W7M77N+Obk55wOsCvW5dIJJKdL94833HhxJne1tWWd jnqxbayNc9MTAECHIzgFEO3FiEBwJgtVmyoALDJqe2N3jXNSrD3Yja79n48EQgfOJ5QVsfSfFJZHQwkk+mgUnv6ZLbnya24mKozf Z58p66dFcgCBDCrxcwY4kW6qVHImI1WMEQAgIb+ijq/L3T45ZcT2bs3b24MJ9LpT1977z1+2226dfDx9d6ubWklEYDrvbf29+x/8 9HSHh//oMLF0FiBAiSMTtWNRgIpJGAbmgONGwiXKxC9fST75sPAgQNt6z/fPblj35G9K5Y9nLxz+fKVe/ftP3nuXWbgQCIRv3/0x NO+zetkX2hNIb0daQNIwAOrkUA1Zv/GiZ19NXHFcQDv8tIHX9qn/gGEJATvzBDIZCaTjTAkg1kkgiGJhAQhIAFKQcAlLLI0rAJFW hYREMsWIWxio1QsLijFrZXaVi1udSvWU1tta9dLkdba5YR+z0lOZuaemU9+d+7cmYEVYEPAMxG+efzgQPnd0+7J6W6rvfCr/f2VB AZsRo8XGfn6Bsj2em0Ak+65fWaquv14+fT2060fBIVH6qajxb4A2KEBnGD/tS8sAkID/wHAStEGPBgk7t+17ohKuPReCwEABhCb0 WhBjq55C1XNWkgEwKCNg1+WJ5aUvnj58PuvVwenirg+AOLZgRDg9xTg77NKyHlDxmX54IPmVekur/NijE24mUaB2UHzkaPpY7SZj ygkKEpk4tlMY8dUWu/WW/P32i5Zs3gsXwAb/wQIgyFgYwr3qVmHZ4gV8bTTDx7PPSz/9eCVh11SCm9qwumdFEbUmGb5La9clmooI DXLNVIplW0BYNd2uza8e0Xl6KF22UqxgQuff4TC/wCkbAwM5cg4EPDqWhaHE6Jjw+vYk8OL2OL69Dfjz0+/8t3o3fbIlcUdForSK BQoqqBwldzkbMJ3vXIZMAIVKo1hJAoEMTscQPDJpS0RubtHdq4oSlkzELpeVrsph/MfUztbF8IRsgJffe55+Azvx2OzlH5LgHR21 EDZN9q4X767tyY3P+lQFwbMZhQeBwGYBNGoJCZj3qZtIEagAihAHWakQkU7aAAqb3ZG9l5p+/bulemynJ6q87s3Cf8V4KdksXnw1 U/g8889HxgQwPkDAAPHRz5bdDDtVMNHV4fXlI2fBojJyAhwBMGwmL8CUBRDaZQkcZsNt5Cg78yWQntZV+shV936Dcoccb6/jwDRA mDlHwBdvXJ95MCFx/euu17rPDsK5ixej7EAV6lUVAyq+CsAmlQkSdkYpml2DtAzxcm5rzfsyukNT/7wgHpH0L8DVi4AWP8EgEmOT oksG5x42H6+7GwfguCzOAYWgtmYZwEAg6UBAP4ACG6ZI2aK38x6ubKtNE50IDQ82FcA668VqE1ftyPri8PbreqM8VFkVkADx9Gx/ ttuGgj+DqC8AkCPtvWPtbXQZAVJz7i0xfOgo9yQYmgO4fwPAPzekfNa8trW+w9+tb7kBqSAkh7dn1ME3zSebMXkCuTZClgoR8fVi xcvWn9+RGOzFTVnS4O779BDVnVKebT4fwBgxCm6zkd5p1LrixuQOQ0hHessSoyPirAOv9RCxzwDwDDgODFclLU1wtDduTeTbKL6h rKCbz1uLROtt7OWWQEe98ntojrjbeKMvbe9H0zM4uhnndVh0bEydRVveFMehmjwRQD6BJB58lZ0VWRY8rs9Wd0zhNFL7YuvKr3W1 /FgoCSLtSwAiwXbw6uR//qwi4+7iqvaHwLgzFa0Xs1V56xTyuBTCC/jiJnSkAo5AwGYSgDHBIK2DZcfrM1nRae+2WOf/qzAI0A7E rRXOvpWfK/dujxAfb1SxPIziMXHrUd2/rylZOo7Fd/ocbx/JTG1LCC2VhYWz3alu21ShQUHeQe2YSSjl1QgxN6iOGVq6ur4lNc2V CWdkMLLsvftEu26yh+37JCFLAugVIoggCsOTig/OtZpTZikVPxso+NIaURzOttPyOHVsTnWYzazQhCzAAAkY5LwwZ4pa35+9Op0g 3atsirh2h4MR7Hb1qju91o3ha1a3jAUwcBpgROc+8VHX2YkXGrE4J9liHO5VVxDHY+t023kqZPuULREoMHyTi0A9BBQOWUIC+cGp nPCQoPU4kNugCtQ+Qelrx/f1VHKWd5JGKILYUGA0N/V8ENxu30S0xASC5l5wlUVro3g5QQGsoLVhdtstASXUk8DEiO1KbpQVlxIs DrxeiuwMGawL7e6enDkeNAyARv9/eJgJ9jHHdu39NaOFggIumIOfVRcq42UcXXp0clxEYkNDJ1JSSn3h0sAx3huZImWF7pyg9Agy xiqAXiBkzSd7c0ab/wiicPhBvkOYNdxhbGigLSkjtELudV7MaNAYuZXgH0XXCmyWiG8Qx+oT7pOGPUSFazAEgCRdnTnbE3hBijjw sS5w59KAcYYLdhYb4Ku5VhGGnzR7zuAZ4Dzc1xAQkLLo6JEVxvGxCAoggDp4C123Ab/ulUbBoqH2zCvQqEyY3m7lwBo44phmZglU rIiVt1a0QcQlYbRYI2byhOPVB6ywztb3wFcsTAuNlZX+k7je1lZX+5E+AoEowkplnluOFlZ1xNZ5Rq+g2o8JILQ4HeAEwIUeqzh aL8HbWrwtQZX7sxFR8lcLkZ3V5eOLXz48SgIA7XDw4tXwHwJio06UjlNW3aTAw6MaFR0YSEBHsm123JuFJaOvU+imi8JJ+fuTgMc amCj+gp0DJe7nLlJiXtbwGUAEFpXE5gl9elhbqP2eHjO9y5v4/nQOwG3vq6+gs3jpZHBbVhcr3JhihgJoC0oePEiZN3WgFOolK mKCGjl+A1OQcDOCqDDguD147szM/XtgoT2iEFAocK8Jb37U8GG+zJUq7qkL4PoMiEi+4O7PKPnmNIUrSI1JDmMyOSlUSkupAq/HY 6KNRtrpaVm3TWoyOuV6ubOpqUkFZwSCphjYdKG9APYSsb+k9I2+IXH466mreuqUfr4DVn/eeKS69/pOBpYadzILcWbjfAw104cP6 50FNq8XdXpGdl/GCrxGW4ym4Ntv4WFRGMbJLEYjQUjwcW/7w75zaerA1GAtV7mMCrjOuvdHJX6gNwoy4X6epGKOr5DSBE1LSMRiU eDMyIEbGGXBMdgDkKWXTExMVJBL0ddosm39WSVfuU/aowJTZVrhMgBRq8+4x2WcSafHSejRzMXQExaLAKcolQLJJBQSx2HQohsz0 5kSgqAlC+cBwoeRZEoWm8v1GqPxs+bw/JZtCVvXQkBssj/X5wo0z7ivGnL7GY9NotLIl6KXyzUxKn4FKacZp8Pk2bV7 pMAhnE6YT8sBfZYk3HfGkNASxcEJMu0omUA4l2TDacKM45hDAAILngSSorGUBSGISoBlp0Nsj2t1+5jBUavzSbILliM0ylYioXPr 6BOXy1M2tdl3ZqjDF8WIMI12XUqy/6JmWhsJMzE06GJhTgIosZBjfx0DK6g4dJS4MJSHDU1DvSjdwqTjjU0J0JAjy6a6zMgyjXTt VstHp+fHxqCn81P8vZChmA2w1Xjm+fH1e+c3Xzz5uant/+xMH9z6O35zbFR9iVAjm+A3zg196cmriiO/8Av/aF/RkhCK/sgJCFhk yUkCyRkEUIohJiXBlEDkgZCFJBABIQUBEFUFAQMICJUREGtgijSQrH4FqUWbdXasWOl73b6mJ6NBnVQB3oGZpbZsHzYe+6953y/N 48VyiQhvIGEwqn5ionJ+YrtgZjcvhAVFcMV85fUl4crKirgp9fEfMUkfJkSSoaWDwBJCACFGbcQsraWRPTk89A/C7iAHpAikWP14 0wvQuqx5wGfCVxhCDSK+j2dNSWtjebC5Q6BiknCVNcQoaRsMjEvEGgg4lCjWG7UHX78AIkzimH+iXmLgtA4xMTh5FxrK5OE65ach GyTH+Di9EiGp4+pboVGYSCIZyG3KOVOp77oyJaRB3iR0wlbs0C4OHBek7sxJ3ft4LgVAJY8DVl+gL2XWu4XlrS7jzgRlA7MbU0 DKRUmlLh72AWQeKKJGGZm6//J0uS0MB4DtzIedYqVWVzyxEywDQplxumVLlTsl0AgyVUvrnIV0IR5xclO7et2kXRtK0wyGVv7gTu MCgn8Xbczd0MkvxB0tfitksPwBsRhll9zssBDxoIXgvwuuFWnnLJw8QnljMe21gIKYgvYcKL9fuzlZ/kBXv34yWPAvWzTT2ZZbVb 0Fw7AUAL0AhFkMSSot0xwBADOkoh1uB+wtBix1Y85lD1v6ekRAA8G/HSwdomCm9UFBWPg4AoEf4A9ZgsrlZA624hqY1SprJgWQmB 2SUSE9rNCSOaeA+aIYafxQ5Ndj0nUOur6aDigFgyQUJC4x7MB+svVCSlVykUYdYKqLS3E1ChGwdO3Gi9/wg6FLGU6Mix1li34FdG A2VD0hkTULs2rleuD/UgwiNZ+WkKF3mQL+qZJmmx60gf/FDllqSQSdpCOZml3fW9ufWfD+KSlE5KSUEArxn8qAHjAnPj6UkYTxSK 4Ja/RgA+EUqDBcig3MF1sxM18FvBhHICoRUyuS87ZVhnVCUsgJF6dIBONbyfd95wlytuCCOKUhwbM+VR9sMXEVMXsGjYZvw1CiFe vGXAMjBHwdYqh2S+L2+mQsIwkNxpwA57C/LD2Rzl9We+9UBNqf8fM+72+71UqcEci9IX7Zhn2l9Q11MkmqHx3cO14moOPGLN4Aj1 0YGTArwjsLrTvvm9kBfQAi8lvbcT/OOzXpSl6cPwOmjiDAWx3rHVlHVxt/vTpeKBUJsMMhcbTrZIAHHkOs606OjSHEAQMgAnD8Ya wrXqtjBMer4gX4Mt9BitPb7spqjtZfMy5NoDFy/TMllF4wzzekYTlNpSgvVbk9KMp3Meg/k24ji6Ea3Xm6UBwBgQ3KcqFq33sDhr Ni4IUGdubsZV8qk+Gzijra+/TmRIcsFYA6eBBe7dl+7Yn8/+Rihodxu28PMhKTIrKyN0eAbR7lKQaAQwm74iX8IAOCjrxNTQt9bm b8xsb47qeabFlypQZ6cyP7w/vExl+F/ARhMZs+tQZ85+zyRphe4mx+WKwzRYWGMeMDSZvYBgED2MsBnkbGhYRx+cOimvOqMkWnIX Xy2POFg+/6r2RIu1y9Aw4MXPLjnANzXA3A40KGb8s1Ttm8PJiU/xdEmJzlWXlwZmqCKMJkiJAklswyABlqzwBA0d4Zx2eAjx9dV rue+nUHcQP55euyQynH233c1fAf+f/wyyYkMPDfkITA5/+FGEXQ0z8rE9p2yxBjE3LOs7ahIX8FnxUCVtn93wnZM5EqMAuwh/a6n eFr6vNXzSSrN/RqnELkZolh4NytmY/VeZWJsaB95W/KU0fFc8HzTQmNYYGOr5Dwo1+3EnKee1VadcG7tefLD93rR4gmrOOxqy4yJ TpEkrojzz5mQdP9Mp0fgMBgFgwOZF2P2vBzfuKB4tx7rWk6YrwtwbcdfI6qmsiTscx5sujkaEU8N5g5mReh5kbzJVoFf0XsYoAFu f694p2em81zf0gGuhBnEdJa5VJUV6vVO/mP5q4hPFr8CgBODT/Kqk5KUFertQPzRBEx/UXo3qAO5EnjlSBX3c7C7jU7DKcbDuTAi TyJKiEmcm90WLxCsjL6LQDsk6s2qMunf//3uvXHP/Emi348qIodHqPKHHh3P0mAUPkqAKxUjw6WFGqjCu3zRTr3njM1WTPjiBdHs MHeersVDuYVR0WuSo4OSdUmJGUU5Kxkh8SHcPhvBmCHnL7ziVZ9NH3eXO2aa8FhUBsvXb364aaR/g6EYLTiVwFgrZz95p0vvtjUO aQ8orNNZWt9/fCenDfEmGj65tWtJ2Pju1ebisMVKtXqDPtEb3YqN5jPeZtcz44xXF1RvW0SvZlabd+8H29Kxxwfde0aPC5ChAJM/ ioAgot5CNYz3dXV2Jymc9f21pS5rkjRs6O/OJ00JOn+i99v9XyaEROlkGS7fFfbO8bKFfGRG8O4bwYIZnXH/1H5Q53rL95UzWrP5 sOIRShQ4vBKEVQsTFsMALUx4yXgOh1RO5VbZj/agXrTRmvTlRalzgKe3tDEHfNa2C0L3pm4YNNPZCZJNiaywwMAiywbAKj/4XTKp qgo+y7qqGe1/c4FqE4FQqZEjkOxxQAE7i/XGciWM9Yy+9we3ChHoSygUFomNHpBydt3q+92++2h4zYSIycz1cWJq9iK2MiAZbPYt Kpc0R2+Ll9t+ump5WhN9dqgUhyRSuMETmcaqQ/I9fVQkDwDkNHwcvTQrCBdI2tjPJtbEMHoKO/uXUrkdYikZ5kGV2ghEAjmETgA1 FVWhsQsACyy7dhcOHwbH7py9fWsf59iY9brewcePsERSkMTaBotRElNUZOFse3iGN8Uj6ObnErSJkKabnv2Zg9s7rAc0aWnG2/cA AmLpuWo2GixFJ1yKgkcqosmAT68LWlN/cbYiBB+wLZbbFxCmoa9zw3maLcN9Olv+06a2h7P2hCe1xinkYlRCoxL9M9/v2IkMgSTi 420wGgk6O921ySZfcM88JYtuAU6egGINRb0LHxIDlYjbSHAd5IjyKVKbXc3tyE2YFy+zboN3lBSdVH04J1t1YXmM602oUBIUShPa tN70QurSkUOFKpWHBGRMAyDE2ZVlOedXVRj37lzt8eP14owXOkkUBgbCkPvelFgZVpMDBmuVHSvMcQGB6zbt5nXfIU6xXel48mvn 58uK6+6PNThN69RWnkD3XegFKR0p9vC2Gmirks5Jdoy3+4W0eTM1sy2e18euNx+zYYT3rswYKMy+VmvFzRditKTKDK8latKDQ19f 8G8fot9z43OMaw3//2g57d/tnp+bqvpHO7qoXDQgp3IFsgBsNHdBNXze/+ZNW2ZHxZ8NtvR+tieGmHOySizerbOTQzaUK9XoAMxT +SAuUDKaItQDAAGiWE9P2/Bvn/zAQZWxH/N21uIElEYwHGIIgqCeo8eYpw82nXIMmxKwrS0Wg3NFy3LHE2cCtxy03KtVVRM1lt02 +2+mV0Wo9tmFG3FGlZ0ZdOI6ELRFvRSD0EFfTNGVGZNWdanIANyHOGAB/z9e3ru3JkYSF/fEel7YHJmdm0ovDy7fv+OSNu07cOeT 2lri+w/0nvK0ZK2ZqKJs5H23rRLrrFLHLgdpFzYfe3pzoNjJ2w9vWrt+fnjZi1ubl4Fm2X81bAXW7ZMlGABA0ms6FedcGC8JfNky 0OFwt5cacft0tFQEPl9pkBP/uXmp4d1p65cefFkNeV0UpSFuJ+93f7ufUDdacjlyDvGBp5xkZGw7Gr5cK8V/tdbOHn69Lmzm5snw U7Y/iiIiGSnKAGEQwCGBAhHVcSCE6mNr68V3oYSmUDThUvHL+1+RNHBaMZCmFZSKdoXjTo9nsBDavnh4vFD3efS/jljQoY9TbKN4 m0SnlilV2qShZajJ9vHwzaZOXfy1AlgDU7mXMZ4o61TZC4jFhwQS1XGgyPd/dUJvVcqW+SlN4Qvn2htPXHk2eMej9Li8xECyhe1L L+1uW/nltZNpdxKT6zT0bBEGothOVGMj9OjkERiPuC0uh5d3f9m8Vhm2p7f2OteJDcndPDvPsN4VHpQNACZZGQFZGKHNISSUv88e UxhEiPTBveD3p3rtkQOFbtLfb3ZbLbUXbwEqOpY32O3dSku13aFRtnlqZQoJ/JiQtABEkXitV2jN4XvrrnYXSyeLN1wu7cZvXCuE ShEjSQDmUiATIwlk1ahXIhEQNwJAsFhXcynl1otM55lj5xo37ePlVz7Nq3P3hxG+6w0ZBAEHNuZ4xaBiTGcMZc4IHEjj+CLhTQF+ 0RvoSgaefkMDMNh2TLl2uju/2PMhtgzGgYvsKAKUUsJ2uVqynd05PMd+dUrXCYJj8ZVYv4Xb/7yDAxfCq5V8Kkg0gj4Ep+WhTfwP mM24HxKAwfOh/gEISDnaOb5/f6M3+NxZvx+LahOPsbJ88EtVOF8XEEjQgAqiYYEM+Z4Y/zVq0TiVSP8onDwjAjhwOy+Axr9ABqB JIGtVT6U9KJE4iUhEDyqnXJpM2WtKmDDkdXF6uLf64h4fHVNdyATq1nSOeAQQEZF9QKA9tKkWRai2WfRqFIJjH0m6h1os4w0Td Mt64QY4sV6e0Gz/dmpgvUGpdQgLm1UOjrAZQ/G4EOEiGMhQCCQUxuMI+23Y3KUKDGRpNzVDx5F28xQwNmZ0OpuNuahCBLjRbl/HY Ba3rzSPLuP2ug2L2xewuP0XeT/6drCaef/wfxs4gC0fziYeynonHsovEg+IXJSx+kYuEl1Mu7L/15kPXc/Mp6GJyXz+n9CJSb3kK oJfv9SLD6lXZeyG6hS7ARjH9wz533I/JnhsOZPSxv968CjznglD8Pj95FP7V5JPOPLCfE4+5ZB8/pvo1QbR6yI2euWY/QpUYp 1/mSsCsZqjIfquEz1aqHD4r9aQUNqGqxvBZT8JqeqVWS8qlQsoK4TP39FveAAwHry39hicCIqmpSL+5xu8r/kz8ni7H7yNHVOz++ ub/wyvz/49yHLNaugaoEAAAAABJRU5ErkJggg==

// @match *://*/*

// @exclude *://yiyan.baidu.com/*

// @exclude *://*.bing.com/search*

// @grant unsafeWindow

// @grant GM_addStyle

// @grant GM_setValue

// @grant GM_getValue

// @grant GM_deleteValue

// @grant GM_listValues

// @grant GM_addValueChangeListener

// @grant GM_removeValueChangeListener

// @grant GM_registerMenuCommand

// @grant GM_unregisterMenuCommand

// @grant GM_getTab

// @grant GM_saveTab

// @grant GM_getTabs

// @grant GM_openInTab

// @grant GM_setClipboard

// @run-at document-start

// @license GPL

// ==/UserScript==

(Function (w) { if (w) { w.name = 'h5player'; } })();

/**

* Elemental monitor

* @param selector - required

* @param fn - required, callback when the element exists

* @param shadowRoot - Optionally specify to monitor the DOM element under a shadowRoot

* Reference: https://javascript.ruanyifeng.com/dom/mutationobserver.html

*/

Function ready (selector, fn, shadowRoot) {

Const win = window;

Const docRoot = shadowRoot || win.document.documentElement;

If (! docRoot) return false

Const MutationObserver = win.MutationObserver || win.WebKitMutationObserver;

Const listeners = docRoot. _MutationListeners || [];

Function $ready (selector, fn) {

// Storage selector and callback function

Listeners.push({

Selector: selector,

Fn: fn

});

/* Add monitoring objects */

If (! docRoot. _MutationListeners || ! docRoot. _MutationObserver) {

docRoot. _MutationListeners = listeners;

docRoot. _MutationObserver = new MutationObserver(() => {

For (let i = 0; i < docRoot. _MutationListeners.length; i++) {

Const item = docRoot. _MutationListeners[i];

Check(item.selector, item.fn);

}

});

docRoot. _MutationObserver.observe(docRoot, {

childList: true,

Subtree: true

});

}

// Check whether the node is already in the DOM

Check(selector, fn);

}

Function check (selector, fn) {

Const elements = docRoot.querySelectorAll(selector);

For (let i = 0; i < elements.length; i++) {

Const element = elements[i];

Element. _MutationReadyList_ = element. _MutationReadyList_ || [];

If (! Element. _MutationReadyList_.includes(fn)) {

Element. _MutationReadyList_.push(fn);

Fn.call(element, element);

}

}

}

Const selectorArr = Array.isArray(selector) ? Selector : [selector];

selectorArr.forEach(selector => $ready(selector, fn));

}

/**

* Some web pages use attachShadow closed mode and need to be open to get video tags, such as Baidu Cloud Disk.

* Solution reference:

* https://developers.google.com/web/fundamentals/web-components/shadowdom? Hl=zh-cn#closed

* https://stackoverflow.com/questions/54954383/override-element-prototype-attachshadow-using-chrome- Extension

*/

Function hackAttachShadow () {

If (window._hasHackAttachShadow_) return

Try {

window._shadowDomList_ = [];

window.Element.prototype._attachShadow = window.Element.prototype.attachShadow;

window.Element.prototype.attachShadow = function () {

Const arg = arguments;

If (arg[0] && arg[0].mode) {

// Force the use of open mode

Arg[0].mode = 'open';

}

Const shadowRoot = this._attachShadow.apply(this, arg);

// Save a copy of shadowDomList

window._shadowDomList_.push(shadowRoot);

/* Give the elements in shadowRoot the opportunity to access shadowHost */

shadowRoot._shadowHost = this;

// Add addShadowRoot custom events under the document

Const shadowEvent = new window.CustomEvent('addShadowRoot', {

shadowRoot,

Detail: {

shadowRoot,

Message: 'addShadowRoot',

Time: new Date()

},

Bubbles: true,

Cancelable: true

});

document.dispatchEvent(shadowEvent);

Return shadowRoot

};

window._hasHackAttachShadow_ = true;

} catch (e) {

console.error('hackAttachShadow error by h5player plug-in', e);

}

}

/*!

* @name original.js

* @description Store some important native functions to prevent external pollution. This logic should be preceded as much as possible, otherwise the stored will be the contaminated function.

* @version 0.0.1

* @author xxxily

* @date 2022/10/16 10:32

* @github https://github.com/xxxily

*/

Const original = {

// Prevent defineProperty and defineProperties from being rewritten by AOP scripts

Object: {

defineProperty: Object.defineProperty,

defineProperties: Object.defineProperties

},

// Prevent such gameplay: https://juejin.cn/post/6865910564817010702

Proxy,

Map,

Map: {

Clear: Map.prototype.clear,

Set: Map.prototype.set,

Has: Map.prototype.has,

Get: Map.prototype.get

},

Console: {

Log: console.log,

Info: console.info,

Error: console.error,

Warn: console.warn,

Table: console.table

},

ShadowRoot,

HTMLMediaElement,

CustomEvent,

// appendChild: Node.prototype.appendChild,

JSON: {

Parse: JSON.parse,

Stringify: JSON.stringify

},

Alert,

Confirm,

Prompt

};

/**

* Media label detection can detect the modified media element of viode, audio, and other label names.

* @param {Function} handler - required callback function to be executed after checking

* @returns mediaElementList

*/

Const mediaCore = (function () {

Let hasMediaCoreInit = false;

Let hasProxyHTMLMediaElement = false;

Let originDescriptors = {};

Const originMethods = {};

Const mediaElementList = [];

Const mediaElementHandler = [];

Const mediaMap = new original.Map();

Const firstUpperCase = str => str.replace(/^\S/, s => s.toUpperCase());

Function isHTMLMediaElement (el) {

Return el instanceof original.HTMLMediaElement

}

/**

* Create relevant API functions for enhanced control according to the instance object of HTMLMediaElement, so as to achieve enhanced functions such as locking playback speed, locking pause and playback.

* @param {*} mediaElement - Required, specific examples of HTMLMediaElement, such as video tags on web pages or new Audio() etc.

* @returns mediaPlusApi

*/

Function createMediaPlusApi (mediaElement) {

If (! isHTMLMediaElement(mediaElement)) { return false }

Let mediaPlusApi = original.map.get.call(mediaMap, mediaElement);

If (mediaPlusApi) {

Return mediaPlusApi

}

/* Create a MediaPlusApi object */

mediaPlusApi = {};

Const mediaPlusBaseApi = {

/**

* Create locks to prevent external logic from operating mediaElement-related properties or functions

* The lock logic here is only data status annotation and switching, and the specific lock function needs to be

* Implemented in proxyPrototypeMethod and hijackPrototypeProperty

*/

Lock (keyName, duration) {

Const infoKey = `__${keyName}_info__`;

mediaPlusApi[infoKey] = mediaPlusApi[infoKey] || {};

mediaPlusApi[infoKey].lock = true;

/* Unlock time information */

Duration = Number(duration);

If (! Number.isNaN(duration) && duration > 0) {

mediaPlusApi[infoKey].unLockTime = Date.now() + duration;

}

// original.console.log(`[mediaPlusApi][lock][${keyName}] ${duration}`)

},

unLock (keyName) {

Const infoKey = `__${keyName}_info__`;

mediaPlusApi[infoKey] = mediaPlusApi[infoKey] || {};

mediaPlusApi[infoKey].lock = false;

mediaPlusApi[infoKey].unLockTime = Date.now() - 100;

// original.console.log(`[mediaPlusApi][unLock][${keyName}]`)

},

isLock (keyName) {

Const info = mediaPlusApi[`__${keyName}_info__`] || {};

If (info.unLockTime) {

/* Delay lock calculates whether it is still locked according to the current time */

Return Date.now() < info.unLockTime

} else {

Return info.lock || false

}

},

/* Note: Call get and set and apply here are not restricted by locks */

Get (keyName) {

If (originDescriptors[keyName] && originDescriptors[keyName].get && ! originMethods[keyName]) {

Return originDescriptors[keyName].get.apply(mediaElement)

}

},

Set (keyName, val) {

If (originDescriptors[keyName] && originDescriptors[keyName].set && ! originMethods[keyName] && typeof val ! == 'undefined') {

// original.console.log(`[mediaPlusApi][${keyName}] Perform native set operation`)

Return originDescriptors[keyName].set.apply(mediaElement, [val])

}

},

Apply (keyName) {

If (originMethods[keyName] instanceof Function) {

Const args = Array.from(arguments);

Args.shift();

// original.console.log(`[mediaPlusApi][${keyName}] Perform native apply operation`)

Return originMethods[keyName].apply(mediaElement, args)

}

}

};

mediaPlusApi = { ...mediaPlusApi, ...mediaPlusBaseApi };

/**

* Extended api list. Implement the pure api call effect of 'playbackRate', 'volume', 'currentTime', 'play', 'pause'. The specific available APIs are as follows:

* mediaPlusApi.lockPlaybackRate()

* mediaPlusApi.unLockPlaybackRate()

* mediaPlusApi.isLockPlaybackRate()

* mediaPlusApi.getPlaybackRate()

* mediaPlusApi.setPlaybackRate(val)

*

* mediaPlusApi.lockVolume()

* mediaPlusApi.unLockVolume()

* mediaPlusApi.isLockVolume()

* mediaPlusApi.getVolume()

* mediaPlusApi.setVolume(val)

*

* mediaPlusApi.lockCurrentTime()

* mediaPlusApi.unLockCurrentTime()

* mediaPlusApi.isLockCurrentTime()

* mediaPlusApi.getCurrentTime()

* mediaPlusApi.setCurrentTime(val)

*

* mediaPlusApi.lockPlay()

* mediaPlusApi.unLockPlay()

* mediaPlusApi.isLockPlay()

* mediaPlusApi.applyPlay()

*

* mediaPlusApi.lockPause()

* mediaPlusApi.unLockPause()

* mediaPlusApi.isLockPause()

* mediaPlusApi.applyPause()

*/

Const extApiKeys = ['playbackRate', 'volume', 'currentTime', 'play', 'pause'];

Const baseApiKeys = Object.keys(mediaPlusBaseApi);

extApiKeys.forEach(key => {

baseApiKeys.forEach(baseKey => {

/* When the key corresponds to a function, there should be no get, set api, but apply api */

If (originMethods[key] instanceof Function) {

If (baseKey === 'get' || baseKey === 'set') {

Return true

}

} else if (baseKey === 'apply') {

Return true

}

mediaPlusApi[`${baseKey}${firstUpperCase(key)}`] = function () {

Return mediaPlusBaseApi[baseKey].apply(null, [key, ...arguments])

};

});

});

original.map.set.call(mediaMap, mediaElement, mediaPlusApi);

Return mediaPlusApi

}

/* The processing logic of the media object is detected, relying on Proxy's proxy for the media function */

Function mediaDetectHandler (ctx) {

If (isHTMLMediaElement(ctx) && ! mediaElementList.includes(ctx)) {

// console.log(`[mediaDetectHandler]`, ctx)

mediaElementList.push(ctx);

createMediaPlusApi(ctx);

Try {

mediaElementHandler.forEach(handler => {

(Handler instanceof Function) && handler(ctx);

});

} catch (e) {}

}

}

/* Agency methodplayAndpauseMethod:，Ensure proper pause and playback */

Function proxyPrototypeMethod (element, methodName) {

Const originFunc = element && element.prototype[methodName];

If (! originFunc) return

element.prototype[methodName] = new original.Proxy(originFunc, {

Apply (target, ctx, args) {

mediaDetectHandler(ctx);

// original.console.log(`[mediaElementMethodProxy] After the execution of the agent${methodName}Func Tion`)

/* Enhance the playback pause logic, For example, allowmediaPlusApiLock out */

If (['play', 'pause'].includes(methodName)) {

Const mediaPlusApi = createMediaPlusApi(ctx);

If (mediaPlusApi && mediaPlusApi.isLock(methodName)) {

// original.console.log(`[mediaElementMethodProxy] ${methodName}Locked and unable to perform`)

Return

}

}

Const result = target.apply(ctx, args);

// TODO observe and judge the execution results of the function

Return result

}

});

// It is not recommended to extend the prototype chain of HTMLMediaElement, so that it is easy for the web page to detect the existence of mediaCore enhanced logic.

// if (originMethods[methodName]) {

// element.prototype[`__${methodName}__`] = originMethods[methodName]

// }

}

/**

* Hijack the playbackRate, volume, currentTime attributes, and increase the locking logic to achieve stronger anti-interference ability

*/

Function hijackPrototypeProperty (element, property) {

If (! Element || ! Element.prototype || ! originDescriptors[property]) {

Return false

}

original.Object.defineProperty.call(Object, element.prototype, property, {

Configurable: true,

Enumerable: true,

Get: function () {

Const val = originDescriptors[property].get.apply(this, arguments);

// original.console.log(`[mediaElementPropertyHijack][${property}][get]`, val)

Const mediaPlusApi = createMediaPlusApi(this);

If (mediaPlusApi && mediaPlusApi.isLock(property)) {

If (property === 'playbackRate') {

Return +! +[]

}

}

Return val

},

Set: function (value) {

// original.console.log(`[mediaElementPropertyHijack][${property}][set]`, value)

If (property === 'src') {

mediaDetectHandler(this);

}

/* Enhance the logic of speed regulation, tuning and progress control, such as allowing locking through mediaPlusApi */

If (['playbackRate', 'volume', 'currentTime'].includes(property)) {

Const mediaPlusApi = createMediaPlusApi(this);

If (mediaPlusApi && mediaPlusApi.isLock(property)) {

// original.console.log(`[mediaElementPropertyHijack] ${property} has been locked and cannot perform related operations`)

Return

}

}

Return originDescriptors[property].set.apply(this, arguments)

}

});

}

Function mediaPlus (mediaElement) {

Return createMediaPlusApi(mediaElement)

}

Function mediaProxy () {

If (! hasProxyHTMLMediaElement) {

Const proxyMethods = ['play', 'pause', 'load', 'addEventListener'];

proxyMethods.forEach(methodName => { proxyPrototypeMethod(HTMLMediaElement, methodName); });

Const hijackProperty = ['playbackRate', 'volume', 'currentTime', 'src'];

hijackProperty.forEach(property => { hijackPrototypeProperty(HTMLMediaElement, property); });

hasProxyHTMLMediaElement = true;

}

Return hasProxyHTMLMediaElement

}

/**

* Media label detection can detect the modified media element of viode, audio, and other label names.

* @param {Function} handler - required callback function to be executed after checking

* @returns mediaElementList

*/

Function mediaChecker (handler) {

If (!( Handler instanceof Function) || mediaElementHandler.includes(handler)) {

Return mediaElementList

} else {

mediaElementHandler.push(handler);

}

If (! hasProxyHTMLMediaElement) {

mediaProxy();

}

Return mediaElementList

}

/**

* Initialize mediaCore-related functions

*/

Function init (mediaCheckerHandler) {

If (hasMediaCoreInit) { return false }

originDescriptors = Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype);

Object.keys(HTMLMediaElement.prototype).forEach(key => {

Try {

If (HTMLMediaElement.prototype[key] instanceof Function) {

originMethods[key] = HTMLMediaElement.prototype[key];

}

} catch (e) {}

});

mediaCheckerHandler = mediaCheckerHandler instanceof Function ? mediaCheckerHandler : function () {};

mediaChecker(mediaCheckerHandler);

hasMediaCoreInit = true;

Return true

}

Return {

Init,

mediaPlus,

mediaChecker,

originDescriptors,

originMethods,

mediaElementList

}

})();

Const mediaSource = (function () {

Let hasMediaSourceInit = false;

Const originMethods = {};

Const originURLMethods = {};

Const mediaSourceMap = new original.Map();

Const objectURLMap = new original.Map();

Function proxyMediaSourceMethod () {

If (! originMethods.addSourceBuffer || ! originMethods.endOfStream) {

Return false

}

// TODO There may be a delay in the entry into force of the agent's upper call. The reason is to be studied.

originURLMethods.createObjectURL = originURLMethods.createObjectURL || URL.prototype.constructor.cre ateObjectURL;

URL.prototype.constructor.createObjectURL = new original.Proxy(originURLMethods.createObjectURL, {

Apply (target, ctx, args) {

Const objectURL = target.apply(ctx, args);

original.map.set.call(objectURLMap, args[0], objectURL);

Return objectURL

}

});

MediaSource.prototype.addSourceBuffer = new original.Proxy(originMethods.addSourceBuffer, {

Apply (target, ctx, args) {

If (! original.map.has.call(mediaSourceMap, ctx)) {

original.map.set.call(mediaSourceMap, ctx, {

mediaSource: ctx,

createTime: Date.now(),

sourceBuffer: [],

endOfStream: false

});

}

original.console.log('[addSourceBuffer]', ctx, args);

Const mediaSourceInfo = original.map.get.call(mediaSourceMap, ctx);

Const mimeCodecs = args[0] || '';

Const sourceBuffer = target.apply(ctx, args);

Const sourceBufferItem = {

mimeCodecs,

originAppendBuffer: sourceBuffer.appendBuffer,

bufferData: [],

mediaInfo: {}

};

Try {

// Example of mimeCodecs string: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'

Const mediaInfo = sourceBufferItem.mediaInfo;

Const tmpArr = sourceBufferItem.mimeCodecs.split(';');

mediaInfo.type = tmpArr[0].split('/')[0];

mediaInfo.format = tmpArr[0].split('/')[1];

mediaInfo.codecs = tmpArr[1].trim().replace('codecs=', '').replace(/["']/g, '');

} catch (e) {

original.console.error('[addSourceBuffer][mediaInfo] Media information parsing error', sourceBufferItem, e);

}

mediaSourceInfo.sourceBuffer.push(sourceBufferItem);

/* Agent sourceBuffer.appendBuffer function and save a copy of the buffer to mediaSourceInfo */

sourceBuffer.appendBuffer = new original.Proxy(sourceBufferItem.originAppendBuffer, {

Apply (bufTarget, bufCtx, bufArgs) {

Const buffer = bufArgs[0];

sourceBufferItem.bufferData.push(buffer);

/* Ensure the existence and correspondence of mediaUrl */

If (original.map.get.call(objectURLMap, ctx)) {

mediaSourceInfo.mediaUrl = original.map.get.call(objectURLMap, ctx);

}

Return bufTarget.apply(bufCtx, bufArgs)

}

});

Return sourceBuffer

}

});

MediaSource.prototype.endOfStream = new original.Proxy(originMethods.endOfStream, {

Apply (target, ctx, args) {

/* Identify that the current media stream has been loaded */

Const mediaSourceInfo = original.map.get.call(mediaSourceMap, ctx);

If (mediaSourceInfo) {

mediaSourceInfo.endOfStream = true;

}

Return target.apply(ctx, args)

}

});

}

/**

* Download media resources, download code reference: https://juejin.cn/post/6873267073674379277

*/

Function downloadMediaSource () {

mediaSourceMap.forEach(mediaSourceInfo => {

If (mediaSourceInfo.hasDownload) {

Const confirm = original.confirm('The media file has been downloaded, are you sure you need to download it again?') ;

If (! Confirm) {

Return false

}

}

If (! mediaSourceInfo.hasDownload && ! mediaSourceInfo.endOfStream) {

Const confirm = original.confirm ('The media data is not fully ready, are you sure you want to perform the download operation?') ;

If (! Confirm) {

Return false

}

original.console.log('[downloadMediaSource] Media data is not fully prepared', mediaSourceInfo);

}

mediaSourceInfo.hasDownload = true;

mediaSourceInfo.sourceBuffer.forEach(sourceBufferItem => {

If (! sourceBufferItem.mimeCodecs || sourceBufferItem.mimeCodecs.toString().indexOf(';') === -1) {

Const msg = '[downloadMediaSource][mimeCodecs][error] mimeCodecs does not exist or the information is abnormal, cannot be downloaded';

Original.console.error(msg, sourceBufferItem);

Original.alert(msg);

Return false

}

Try {

Let mediaTitle = sourceBufferItem.mediaInfo.title || `${document.title || Date.now()}_${sourceBuffer Item.mediaInfo.type}.${sourceBufferItem.mediaInfo.format}`;

If (! sourceBufferItem.mediaInfo.title) {

mediaTitle = original.prompt ('Please confirm the file title:', mediaTitle) || mediaTitle;

sourceBufferItem.mediaInfo.title = mediaTitle;

}

If (! mediaTitle.endsWith(sourceBufferItem.mediaInfo.format)) {

mediaTitle = mediaTitle + '.' + sourceBufferItem.mediaInfo.format;

}

Const a = document.createElement('a');

A.href = URL.createObjectURL(new Blob(sourceBufferItem.bufferData));

A.download = mediaTitle;

A.click();

URL.revokeObjectURL(a.href);

} catch (e) {

mediaSourceInfo.hasDownload = false;

Const msg = '[downloadMediaSource][error]';

Original.console.error(msg, e);

Original.alert(msg);

}

});

});

}

Function hasInit () {

Return hasMediaSourceInit

}

Function init () {

If (hasMediaSourceInit) {

Return false

}

If (! window.MediaSource) {

Return false

}

Object.keys(MediaSource.prototype).forEach(key => {

Try {

If (MediaSource.prototype[key] instanceof Function) {

originMethods[key] = MediaSource.prototype[key];

}

} catch (e) {}

});

proxyMediaSourceMethod();

hasMediaSourceInit = true;

}

Return {

Init,

hasInit,

originMethods,

originURLMethods,

mediaSourceMap,

objectURLMap,

downloadMediaSource

}

})();

/*!

* @name utils.js

* @description Methods related to data types

* @version 0.0.1

* @author Blaze

* @date 22/03/2019 22:46

* @github https://github.com/xxxily

*/

/**

* Accurately obtain the specific type of object See: https://www.talkingcoder.com/article/6333557442705696719

* @param obj { all } - Required object to judge

* @returns {*} Return the specific type of judgment

*/

Function getType (obj) {

If (obj == null) {

Return String(obj)

}

Return typeof obj === 'object' || typeof obj === 'function'

? (Obj.constructor && obj.constructor.name && obj.constructor.name.toLowerCase()) ||

/Function\s(. +?) \(/.exec(obj.constructor)[1].toLowerCase()

: typeof obj

}

Const isType = (obj, typeName) => getType(obj) === typeName;

Const isObj = obj => isType(obj, 'object');

/*!

* @name object.js

* @description Relevant methods of object operation

* @version 0.0.1

* @author Blaze

* @date 21/03/2019 23:10

* @github https://github.com/xxxily

*/

/**

* Deep copy of an object

* @source - Object|Array object or array to be copied

*/

Function clone (source) {

Var result = {};

If (typeof source! == 'object') {

Return source

}

If (Object.prototype.toString.call(source) === '[object Array]') {

Result = [];

}

If (Object.prototype.toString.call(source) === '[object Null]') {

Result = null;

}

For (var key in source) {

Result[key] = (typeof source[key] === 'object') ? Clone(source[key]) : source[key];

}

Return result

}

/* Traverse the object, but does not contain the attributes on its prototype chain */

Function forIn (obj, fn) {

Fn = fn || function () {};

For (var key in obj) {

If (Object.hasOwnProperty.call(obj, key)) {

Fn(key, obj[key]);

}

}

}

/**

* Deeply merge two enumerable objects

* @param objA {object} - Required Object A

* @param objB {object} - Required Object B

* @param concatArr {boolean} - Optional Merge arrays. When encountering arrays by default, replace the current array directly with another array. If this setting is true, it will be merged when encountering arrays, instead of directly replacing

* @returns {*|void}

*/

Function mergeObj (objA, objB, concatArr) {

Function isObj (obj) {

Return Object.prototype.toString.call(obj) === '[object Object]'

}

Function isArr (arr) {

Return Object.prototype.toString.call(arr) === '[object Array]'

}

If (! isObj(objA) || ! isObj(objB)) return objA

Function deepMerge (objA, objB) {

forIn(objB, function (key) {

Const subItemA = objA[key];

Const subItemB = objB[key];

If (typeof subItemA === 'undefined') {

objA[key] = subItemB;

} else {

If (isObj(subItemA) && isObj(subItemB)) {

/* Deep merging */

objA[key] = deepMerge(subItemA, subItemB);

} else {

If (concatArr && isArr(subItemA) && isArr(subItemB)) {

objA[key] = subItemA.concat(subItemB);

} else {

objA[key] = subItemB;

}

}

}

});

Return objA

}

Return deepMerge(objA, objB)

}

/**

* Get the value in the object according to the text path. If you want to support arrays, please use the get method of lodash.

* @param obj {Object} - Required Object to be operated

* @param path {String} - Required path information

* @returns {*}

*/

Function getValByPath (obj, path) {

Path = path || '';

Const pathArr = path.split('.') ;

Let result = obj;

/* Recursive extraction result value */

For (let i = 0; i < pathArr.length; i++) {

If (! Result) break

Result = result[pathArr[i]];

}

Return result

}

/**

* Set the value in the object according to the text path. If you need to support arrays, please use the set method of lodash.

* @param obj {Object} - Required Object to be operated

* @param path {String} - Required path information

* @param val {Any} - Required If the parameter is not passed, the final result will be set to undefined

* @returns {Boolean} Returning true means that the setting is successful, otherwise the setting fails.

*/

Function setValByPath (obj, path, val) {

If (! Obj || ! Path || typeof path ! == 'string') {

Return false

}

Let result = obj;

Const pathArr = path.split('.') ;

For (let i = 0; i < pathArr.length; i++) {

If (! Result) break

If (i === pathArr.length - 1) {

result[pathArr[i]] = val;

Return Number.isNaN(val) ? Number.isNaN(result[pathArr[i]]) : result[pathArr[i]] === val

}

Result = result[pathArr[i]];

}

Return false

}

Const quickSort = function (arr) {

If (arr.length <= 1) { return arr }

Var pivotIndex = Math.floor(arr.length / 2);

Var pivot = arr.splice(pivotIndex, 1)[0];

Var left = [];

Var right = [];

For (var i = 0; i < arr.length; i++) {

If (arr[i] < pivot) {

Left.push(arr[i]);

} else {

Right.push(arr[i]);

}

}

Return quickSort(left).concat([pivot], quickSort(right))

};

Function hideDom (selector, delay) {

setTimeout(function () {

Const dom = document.querySelector(selector);

If (dom) {

Dom.style.opacity = 0;

}

}, delay || 1000 * 5);

}

/**

* Upward search operation

* @param dom {Element} - Required Initial dom element

* @param fn {function} - Required Callback operation of each level of ParentNode

* If the function returns true, it means to stop the upward search action.

*/

Function eachParentNode (dom, fn) {

Let parent = dom.parentNode;

While (parent) {

Const isEnd = fn(parent, dom);

Parent = parent.parentNode;

If (isEnd) {

Break

}

}

}

/**

* Dynamically load css content

* @param cssText {String} - Required styled text content

* @param id {String} - Optionally specify the id number of the style text. If the corresponding id number already exists, it will not be inserted again.

* @param insetTo {Dom} - Optional Specify where to insert

* @returns {HTMLStyleElement}

*/

Function loadCSSText (cssText, id, insetTo) {

If (id && document.getElementById(id)) {

Return false

}

Const style = document.createElement('style');

Const head = insetTo || document.head || document.getElementsByTagName('head')[0];

style.appendChild(document.createTextNode(cssText));

head.appendChild(style);

If (id) {

style.setAttribute('id', id);

}

Return style

}

/**

* Determine whether the current element is an editable element

* @param target

* @returns Boolean

*/

Function isEditableTarget (target) {

Const isEditable = target.getAttribute && target.getAttribute('contenteditable') === 'true';

Const isInputDom = /INPUT|TEXTAREA|SELECT|LABEL/.test(target.nodeName);

Return isEditable || isInputDom

}

/**

* Determine whether an element is in shadowDom

* Reference: https://www.coder.work/article/299700

* @param node

* @returns {boolean}

*/

Function isInShadow (node, returnShadowRoot) {

For (; node; node = node.parentNode) {

If (node.toString() === '[object ShadowRoot]') {

If (returnShadowRoot) {

Return node

} else {

Return true

}

}

}

Return false

}

/**

* Determine whether an element is in the visual area, which is suitable for passive calls and requires high performance. Please use IntersectionObserver

* Reference: https://github.com/febobo/web-interview/issues/84

* @param element

* @returns {boolean}

*/

Function isInViewPort (element) {

Const viewWidth = window.innerWidth || document.documentElement.clientWidth;

Const viewHeight = window.innerHeight || document.documentElement.clientHeight;

Const {

Top,

Right,

Bottom,

Left

} = element.getBoundingClientRect();

Return (

Top >= 0 &&

Left >= 0 &&

Right <= viewWidth &&

Bottom <= viewHeight

)

}

/**

* Convert the in-line style into the form of an object

* @param {string} inlineStyle - required, for example: position: relative; opacity: 1; visibility: hidden; transform: Scale(0.1) rotate(180deg);

* @returns {Object}

*/

Function inlineStyleToObj (inlineStyle) {

If (typeof inlineStyle ! == 'string') {

Return {}

}

Const result = {};

Const styArr = inlineStyle.split(';');

styArr.forEach(item => {

Const tmpArr = item.split(':');

If (tmpArr.length === 2) {

result[tmpArr[0].trim()] = tmpArr[1].trim();

}

});

Return result

}

Function objToInlineStyle (obj) {

If (Object.prototype.toString.call(obj) ! == '[object Object]') {

Return ''

}

Const styleArr = [];

Object.keys(obj).forEach(key => {

styleArr.push(`${key}: ${obj[key]}`);

});

Return styleArr.join('; ')

}

/* ua information camouflage */

Function fakeUA (ua) {

// Object.defineProperty(navigator, 'userAgent', {

// value: ua,

// writable: false,

// configurable: false,

// enumerable: true

// })

Const desc = Object.getOwnPropertyDescriptor(Navigator.prototype, 'userAgent');

Object.defineProperty(Navigator.prototype, 'userAgent', { ...desc, get: function () { return ua } }) ;

}

/* ua information source: https://developers.whatismybrowser.com */

Const userAgentMap = {

Android: {

Chrome: 'Mozilla/5.0 (Linux; Android 9; SM-G960F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTM L, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36',

Firefox: 'Mozilla/5.0 (Android 7.0; Mobile; rv:57.0) Gecko/57.0 Firefox/57.0'

},

iPhone: {

Safari: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Ge Cko) CriOS/111.0.0.0 Mobile/15E148 Safari/604.1',

Chrome: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Ge Cko) CriOS/74.0.3729.121 Mobile/15E148 Safari/605.1'

},

iPad: {

Safari: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Vers Ion/12.1 Mobile/15E148 Safari/604.1',

Chrome: 'Mozilla/5.0 (iPad; CPU OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriO S/74.0.3729.155 Mobile/15E148 Safari/605.1'

},

Mac: {

Safari: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Ve Rsion/12.1.1 Safari/605.1.15',

Chrome: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Firefox) Ch Rome/74.0.3729.157 Safari/537.36'

}

};

/**

* Determine whether it is in the Iframe

* @returns {boolean}

*/

Function isInIframe () {

Return window! == window.top

}

/**

* Determine whether it is in a cross-domain restricted Iframe

* @returns {boolean}

*/

Function isInCrossOriginFrame () {

Let result = true;

Try {

If (window.top.localStorage || window.top.location.href) {

Result = false;

}

} catch (e) {

Result = true;

}

Return result

}

/**

* Simple throttt function

* @param fn

* @param interval

* @returns {Function}

*/

Function throttle (fn, interval = 80) {

Let timeout = null;

Return function () {

If (timeout) return false

Timeout = setTimeout(() => {

Timeout = null;

}, interval);

Fn.apply(this, arguments);

}

}

/*!

* @name url.js

* @description is used to parse the url

* @version 0.0.1

* @author Blaze

* @date 27/03/2019 15:52

* @github https://github.com/xxxily

*/

/**

* Reference examples:

* https://segmentfault.com/a/1190000006215495

* Note: This method must rely on the browser's DOM object

*/

Function parseURL (url) {

Var a = document.createElement('a');

A.href = url || window.location.href;

Return {

Source: url,

Protocol: a.protocol.replace(':', ''),

Host: a.hostname,

Port: a.port,

Origin: a.origin,

Search: a.search,

Query: a.search,

File: (a.pathname.match(/\/([^/? #]+)$/i) || ['', ''])[1],

Hash: a.hash.replace('#', ''),

Path: a.pathname.replace(/^([^/])/, '/$1'),

Relative: (a.href.match(/tps?:\/\/[^/]+(. +)/) || ['', ''])[1],

Params: (function () {

Var ret = {};

Var seg = [];

Var paramArr = a.search.replace(/^\? /, '').split('&');

For (var i = 0; i < paramArr.length; i++) {

Var item = paramArr[i];

If (item ! == '' && item.indexOf('=')) {

Seg.push(item);

}

}

For (var j = 0; j < seg.length; j++) {

Var param = seg[j];

Var idx = param.indexOf('=');

Var key = param.substring(0, idx);

Var val = param.substring(idx + 1);

If (! Key) {

Ret[val] = null;

} else {

Ret[key] = val;

}

}

Return ret

})()

}

}

/**

* Convert the params object into string mode

* @param params {Object} - Required params object

* @returns {string}

*/

Function stringifyParams (params) {

Var strArr = [];

If (! Object.prototype.toString.call(params) === '[object Object]') {

Return ''

}

For (var key in params) {

If (Object.hasOwnProperty.call(params, key)) {

Var val = params[key];

Var valType = Object.prototype.toString.call(val);

If (val === '' || valType === '[object Undefined]') continue

If (val === null) {

strArr.push(key);

} else if (valType === '[object Array]') {

strArr.push(key + '=' + val.join(','));

} else {

Val = (JSON.stringify(val) || '' + val).replace(/(^"|"$)/g, '');

strArr.push(key + '=' + val);

}

}

}

Return strArr.join('&')

}

/**

* The url object will be parsed and restored to the url address by parseURL

* It is mainly used to reorganize the url link after the query parameters are dynamically modified.

* @param obj {Object} - required parseURL to parse the url object

*/

Function stringifyToUrl (urlObj) {

Var query = stringifyParams(urlObj.params) || '';

If (query) { query = '?' + query; }

Var hash = urlObj.hash ? '#' + urlObj.hash : '';

Return urlObj.origin + urlObj.path + query + hash

}

/* Shortcut keys currently in use */

Const hasUseKey = {

keyCodeList: [13, 16, 17, 18, 27, 32, 37, 38, 39, 40, 49, 50, 51, 52, 67, 68, 69, 70, 73, 74, 75, 77 , 78, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 97, 98, 99, 100, 220],

keyList: ['enter', 'shift', 'control', 'alt', 'escape', ' ', 'arrowleft', 'arrowright', 'arrowup', ' Arrowdown', '1', '2', '3', '4', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'n', 'o', 'p', 'q', 'r', 's', 't' , 'u', 'w', 'x', 'y', 'z', '\\', '|'],

keyMap: {

Enter: 13,

Shift: 16,

Ctrl: 17,

Alt: 18,

Esc: 27,

Space: 32,

'←': 37,

'↑': 38,

'→': 39,

'↓': 40,

1: 49,

2: 50,

3: 51,

4: 52,

C: 67,

D: 68,

E: 69,

F: 70,

I: 73,

J: 74,

K: 75,

M: 77,

N: 78,

O: 79,

P: 80,

Q: 81,

R: 82,

S: 83,

T: 84,

U: 85,

W: 87,

X: 88,

Y: 89,

Z: 90,

Pad1: 97,

Pad2: 98,

Pad3: 99,

Pad4: 100,

'\\': 220

}

};

/**

* Determine whether the current key is registered as the required key

* Used to reduce interference to other keys

*/

Function isRegisterKey (event) {

Const keyCode = event.keyCode;

Const key = event.key.toLowerCase();

Return hasUseKey.keyCodeList.includes(keyCode) ||

hasUseKey.keyList.includes(key)

}

/**

* Because the tampermonkey encapsulates the window object, the window we actually access is not the real window of the page.

* As a result, we can't mount some objects when we need to mount the window of the page for debugging.

* Therefore, special means must be used to access the real window object on the page, so the following function is available.

* @returns {Promise<void>}

*/

Async function getPageWindow () {

Return new Promise(function (resolve, reject) {

If (window._pageWindow) {

Return resolve(window._pageWindow)

}

/* Try to get pageWindow through synchronization */

Try {

Const pageWin = getPageWindowSync();

If (pageWin && pageWin.document && pageWin.XMLHttpRequest) {

window._pageWindow = pageWin;

resolve(pageWin);

Return pageWin

}

} catch (e) {}

/* The following method of obtaining pagewindow asynchronously has expired in the latest chrome browser */

Const listenEventList = ['load', 'mousemove', 'scroll', 'get-page-window-event'];

Function getWin (event) {

window._pageWindow = this;

// debug.log('getPageWindow succeed', event)

listenEventList.forEach(eventType => {

window.removeEventListener(eventType, getWin, true);

});

resolve(window._pageWindow);

}

listenEventList.forEach(eventType => {

window.addEventListener(eventType, getWin, true);

});

/* Dispair events by yourself in order to get the pageWindow object in the shortest time */

window.dispatchEvent(new window.Event('get-page-window-event'));

})

}

getPageWindow();

/**

* Get pageWindow through synchronization

* Note that the synchronous acquisition method needs to write the script to the head. Some websites cannot be obtained normally due to the write failure due to security policies.

* @returns {*}

*/

Function getPageWindowSync (rawFunction) {

If (window.unsafeWindow) return window.unsafeWindow

If (document._win_) return document._win_

Try {

rawFunction = rawFunction || window.__rawFunction__ || Function.prototype.constructor;

// return rawFunction('return window')()

// Function('return (function(){}.constructor("return this")());')

Return rawFunction('return (function(){}.constructor("var getPageWindowSync=1; return this")());')()

} catch (e) {

console.error('getPageWindowSync error', e);

Const head = document.head || document.querySelector('head');

Const script = document.createElement('script');

script.appendChild(document.createTextNode('document._win_ = window'));

head.appendChild(script);

Return document._win_

}

}

Function openInTab (url, opts, referer) {

If (referer) {

Const urlObj = parseURL(url);

If (! urlObj.params.referer) {

urlObj.params.referer = encodeURIComponent(window.location.href);

Url = stringifyToUrl(urlObj);

}

}

If (window.GM_openInTab) {

window.GM_openInTab(url, opts || {

Active: true,

Insert: true,

setParent: true

});

}

}

/* Make sure the number is positive */

Function numUp (num) {

If (typeof num === 'number' && num < 0) {

Num = Math.abs(num);

}

Return num

}

/* Make sure the number is negative */

Function numDown (num) {

If (typeof num === 'number' && num > 0) {

Num = -num;

}

Return num

}

Function isMediaElement (element) {

Return element && (element instanceof HTMLMediaElement || element.HTMLMediaElement || element.HTMLVi deoElement || element.HTMLAudioElement)

}

Function isVideoElement (element) {

Return element && (element instanceof HTMLVideoElement || element.HTMLVideoElement)

}

Function isAudioElement (element) {

Return element && (element instanceof HTMLAudioElement || element.HTMLAudioElement)

}

/*!

* configManager parse localStorage error * @name configManager.ts

* @description Configure unified management script

* @version 0.0.1

* @author xxxily

* @date 2023/03/06 14:29

* @github https://github.com/xxxily

*/

/**

* Determine whether localStorage is available

* localStorage is not guaranteed to be 100% available, so it must be judged before use, otherwise it will cause abnormal scripts under some websites.

* https://stackoverflow.com/questions/30481516/iframe-in-chrome-error-failed-to-read-localstorage-fr Om-window-access-deni

* https://cloud.tencent.com/developer/article/1803097 (when localStorage is not available, window.localStorage is null, not It is undefined in the text)

*/

Function isLocalStorageUsable () {

Return window.localStorage && window.localStorage.getItem instanceof Function && window.localStorage .setItem instanceof Function

}

/**

* Determine whether GlobalStorage is available. The current GlobalStorage is based on the relevant api provided by tampermonkey.

* https://www.tampermonkey.net/documentation.php? ext=dhdg#GM_setValue

*/

Function isGlobalStorageUsable () {

Return window.GM_setValue && window.GM_getValue && window.GM_deleteValue && window.GM_listValues

}

/**

* Methods related to storing clean localStorage

* Prevent the method under the localStorage object from being rewritten, resulting in different reading and writing rules.

*/

Const rawLocalStorage = (function getRawLocalStorage () {

Const localStorageApis = ['getItem', 'setItem', 'removeItem', 'clear', 'key'];

Const rawLocalStorage = {};

localStorageApis.forEach((apiKey) => {

If (isLocalStorageUsable()) {

rawLocalStorage[`_${apiKey}_`] = localStorage[apiKey];

rawLocalStorage[apiKey] = function () {

Return rawLocalStorage[`_${apiKey}_`].apply(localStorage, arguments)

};

} else {

rawLocalStorage[apiKey] = function () {

console.error('localStorage unavailable');

};

}

});

Return rawLocalStorage

})();

Class ConfigManager {

Constructor (opts) {

This.opts = opts;

}

/**

* Convert confPath to the key name that is finally stored in localStorage or globalStorage

* @param {String} confPath - required, configuration path information: for example: 'enhance.blockSetPlaybackRate'

* @returns {keyName}

*/

getConfKeyName (confPath = '') {

Return this.opts.prefix + confPath.replace(/\./g, '_')

}

/**

* Convert the key name stored in localStorage or globalStorage into the confPath of the actual call

* @param {String} keyName - Required key name stored in localStorage or globalStorage, for example: '_h5player_enhance_blockSetPlayba ckRate'

* @returns {confPath}

*/

getConfPath (keyName = '') {

Return keyName.replace(this.opts.prefix, '').replace(/_/g, '.')

}

getConfPathList (config) {

Const confPathList = [];

/* Recursively obtain the path of all configuration items */

Function getConfPathList (config, path = '') {

Object.keys(config).forEach((key) => {

Const pathKey = path ? `${path}.${key}` : key;

If (Object.prototype.toString.call(config[key]) === '[object Object]') {

getConfPathList(config[key], pathKey);

} else {

confPathList.push(pathKey);

}

});

}

getConfPathList(config);

Return confPathList

}

/**

* Obtain relevant configuration information according to the given configuration path

* Acquisition order: LocalStorage > GlobalStorage > defConfig > null

* @param {String} confPath - required, configuration path information: for example: 'enhance.blockSetPlaybackRate'

* @returns {*} If null is returned, it means that the relevant configuration information has not been obtained.

*/

Get (confPath) {

If (typeof confPath! == 'string') {

Return null

}

/* By default, use the local localStorage configuration first */

Const localConf = this.getLocalStorage(confPath);

If (localConf! == null && localConf ! == undefined) {

Return localConf

}

/* If localStorage has no relevant configuration, try to use the configuration of GlobalStorage */

Const globalConf = this.getGlobalStorage(confPath);

If (globalConf! == null && globalConf ! == undefined) {

Return globalConf

}

/* If the localStorage and GlobalStorage configurations are not found, try to get the relevant configuration information in the default configuration table */

Const config = this.getConfObj();

Const defConfVal = getValByPath(config, confPath);

If (typeof defConfVal ! == 'undefined' && defConfVal ! == null) {

Return defConfVal

}

Return null

}

/**

* Write the configuration results to localStorage or GlobalStorage

* Write order: LocalStorage > GlobalStorage

* Whether it is successfully written or not, the result will be updated to the corresponding configuration item in defConfig.

* @param {String} confPath

* @param {*} val

* @returns {Boolean}

*/

Set (confPath, val) {

If (typeof confPath! == 'string' || typeof val === 'undefined' || val === null) {

Return false

}

setValByPath(this.opts.config, confPath, val);

Let sucStatus = false;

sucStatus = this.setLocalStorage(confPath, val);

If (! sucStatus) {

sucStatus = this.setGlobalStorage(confPath, val);

}

Return sucStatus

}

/* Get and list all currently set configuration items */

List () {

Const result = {

localConf: this.listLocalStorage(),

globalConf: this.listGlobalStorage(),

defConfig: this.opts.config

};

Return result

}

/* Clear configuration items that have been written to local storage */

Clear () {

this.clearLocalStorage();

this.clearGlobalStorage();

}

/**

* Obtain the configuration information defined by LocalStorage according to the given configuration path

* @param {String} confPath - required, configuration path information

* @returns

*/

getLocalStorage (confPath) {

If (typeof confPath! == 'string') {

Return null

}

Const key = this.getConfKeyName(confPath);

If (isLocalStorageUsable()) {

Let localConf = rawLocalStorage.getItem(key);

If (localConf! == null && localConf ! == undefined) {

Try {

localConf = JSON.parse(localConf);

} catch (e) {

console.error('configManager parse localStorage error:', key, localConf);

}

Return localConf

}

}

Return null

}

/**

* Obtain the configuration information defined by GlobalStorage according to the given configuration path

* @param {String} confPath - required, configuration path information

* @returns

*/

getGlobalStorage (confPath) {

If (typeof confPath! == 'string') {

Return null

}

Const key = this.getConfKeyName(confPath);

If (isGlobalStorageUsable()) {

Const globalConf = window.GM_getValue(key);

If (globalConf! == null && globalConf ! == undefined) {

Return globalConf

}

}

Return null

}

/**

* Write the configuration results to localStorage

* @param {String} confPath

* @param {*} val

* @returns {Boolean}

*/

setLocalStorage (confPath, val) {

If (typeof confPath! == 'string' || typeof val === 'undefined' || val === null) {

Return false

}

setValByPath(this.opts.config, confPath, val);

Const key = this.getConfKeyName(confPath);

If (isLocalStorageUsable()) {

Try {

If (Object.prototype.toString.call(val) === '[object Object]' || Array.isArray(val)) {

Val = JSON.stringify(val);

}

rawLocalStorage.setItem(key, val);

Return true

} catch (e) {

console.error('configManager set localStorage error:', key, val, e);

Return false

}

} else {

Return false

}

}

/**

* Write the configuration results to globalStorage

* @param {String} confPath

* @param {*} val

* @returns {Boolean}

*/

setGlobalStorage (confPath, val) {

If (typeof confPath! == 'string' || typeof val === 'undefined' || val === null) {

Return false

}

setValByPath(this.opts.config, confPath, val);

Const key = this.getConfKeyName(confPath);

If (isGlobalStorageUsable()) {

Try {

window.GM_setValue(key, val);

Return true

} catch (e) {

console.error('configManager set globalStorage error:', key, val, e);

Return false

}

} else {

Return false

}

}

listLocalStorage () {

If (isLocalStorageUsable()) {

Const result = {};

Object.keys(localStorage).forEach((key) => {

If (key.startsWith(this.opts.prefix)) {

Const confPath = this.getConfPath(key);

result[confPath] = this.getLocalStorage(confPath);

}

});

Return result

} else {

Return {}

}

}

listGlobalStorage () {

If (isGlobalStorageUsable()) {

Const result = {};

Const globalStorage = window.GM_listValues();

globalStorage.forEach((key) => {

If (key.startsWith(this.opts.prefix)) {

Const confPath = this.getConfPath(key);

result[confPath] = this.getGlobalStorage(confPath);

}

});

Return result

} else {

Return {}

}

}

getConfObj () {

Const confList = this.list();

/* Synchronize global configuration to this.opts.config */

Object.keys(confList.globalConf).forEach((confPath) => {

setValByPath(this.opts.config, confPath, confList.globalConf[confPath]);

});

/* Synchronize local configuration to this.opts.config */

Object.keys(confList.localConf).forEach((confPath) => {

setValByPath(this.opts.config, confPath, confList.localConf[confPath]);

});

Return this.opts.config

}

setLocalStorageByObj (config) {

Const oldConfig = this.getConfObj();

Const confPathList = this.getConfPathList(config);

confPathList.forEach((confPath) => {

Const oldVal = getValByPath(oldConfig, confPath);

Const val = getValByPath(config, confPath);

/* Skip the same value or a value that does not exist in the old configuration */

If (oldVal === val || oldVal === undefined) {

Return

}

this.setLocalStorage(confPath, val);

});

}

setGlobalStorageByObj (config) {

Const oldConfig = this.getConfObj();

Const confPathList = this.getConfPathList(config);

confPathList.forEach((confPath) => {

Const oldVal = getValByPath(oldConfig, confPath);

Const val = getValByPath(config, confPath);

/* Skip the same value or a value that does not exist in the old configuration */

If (oldVal === val || oldVal === undefined) {

Return

}

console.log('setGlobalStorageByObj', confPath, val);

this.setGlobalStorage(confPath, val);

});

}

clearLocalStorage () {

If (isLocalStorageUsable()) {

Object.keys(localStorage).forEach((key) => {

If (key.startsWith(this.opts.prefix)) {

rawLocalStorage.removeItem(key);

}

});

}

}

clearGlobalStorage () {

If (isGlobalStorageUsable()) {

Const globalStorage = window.GM_listValues();

globalStorage.forEach((key) => {

If (key.startsWith(this.opts.prefix)) {

window.GM_deleteValue(key);

}

});

}

}

mergeDefConf (conf) {

Return mergeObj(this.opts.config, conf)

}

}

/* Example of use: */

// const myConfig = new ConfigManager({

// prefix: '_myConfig_',

// config: {

// hotkeys: [

// {

// desc: 'test',

// key: 'v',

// command: 'toogleVisible',

// /* If you need to disable the shortcut key, set disabled to true */

// disabled: false,

// },

// ],

// enable: true,

// debug: false,

// },

// })

// myConfig.set('enable', false)

// /* For arrays, it is not supported to directly modify array elements for the time being. You need to get the array first, then modify the array elements, and then rewrite */

// const hotkeys = myConfig.get('hotkeys')

// hotkeys[0].disabled = true

// myConfig.set('hotkeys', hotkeys)

Const configManager = new ConfigManager({

Prefix: '_h5player_',

Config: {

Enable: true,

Media: {

autoPlay: false,

playbackRate: 1,

Volume: 1,

/* Whether to allow storage of playback progress */

allowRestorePlayProgress: {

},

/* Video playback progress mapping table */

Progress: {}

},

Hotkeys: [

{

Desc: 'full screen of web page',

Key: 'shift+enter',

Command: 'setWebFullScreen',

/* If you need to disable the shortcut key, set disabled to true */

Disabled: false

},

{

Desc: 'full screen',

Key: 'enter',

Command: 'setFullScreen'

},

{

Desc: 'Switch picture-in-picture mode',

Key: 'shift+p',

Command: 'togglePictureInPicture'

},

{

Desc: 'Video screenshot',

Key: 'shift+s',

Command: 'capture'

},

{

Desc: 'Enable or disable the automatic resumption of playback progress function',

Key: 'shift+r',

Command: 'capture'

},

{

Desc: 'vertical mirror flip',

Key: 'shift+m',

Command: 'setMirror',

Args: [true]

},

{

Desc: 'horizontal mirror flip',

Key: 'm',

Command: 'setMirror'

},

{

Desc: 'Download audio and video files (experimental function)',

Key: 'shift+d',

Command: 'mediaDownload'

},

{

Desc: 'Reduce the video screen -0.05',

Key: 'shift+x',

Command: 'setScaleDown'

},

{

Desc: 'Enlarge the video screen +0.05',

Key: 'shift+c',

Command: 'setScaleUp'

},

{

Desc: 'Recover video screen',

Key: 'shift+z',

Command: 'resetTransform'

},

{

Desc: 'The picture moves 10px to the right',

Key: 'shift+arrowright',

Command: 'setTranslateRight'

},

{

Desc: 'The picture moves 10px to the left',

Key: 'shift+arrowleft',

Command: 'setTranslateLeft'

},

{

Desc: 'The picture moves up 10px',

Key: 'shift+arrowup',

Command: 'setTranslateUp'

},

{

Desc: 'The picture moves down 10px',

Key: 'shift+arrowdown',

Command: 'setTranslateDown'

},

{

Desc: '5 seconds forward',

Key: 'arrowright',

Command: 'setCurrentTimeUp'

},

{

Desc: '5 seconds back',

Key: 'arrowleft',

Command: 'setCurrentTimeDown'

},

{

Desc: 'Forward 30 seconds',

Key: 'ctrl+arrowright',

Command: 'setCurrentTimeUp',

Args: [30]

},

{

Desc: '30 seconds back',

Key: 'ctrl+arrowleft',

Command: 'setCurrentTimeDown',

Args: [-30]

},

{

Desc: 'Volume increased by 5%',

Key: 'arrowup',

Command: 'setVolumeUp',

Args: [0.05]

},

{

Desc: 'Volume reduced by 5%',

Key: 'arrowdown',

Command: 'setVolumeDown',

Args: [-0.05]

},

{

Desc: 'Volume increased by 20%',

Key: 'ctrl+arrowup',

Command: 'setVolumeUp',

Args: [0.2]

},

{

Desc: 'Volume reduced by 20%',

Key: 'ctrl+arrowdown',

Command: 'setVolumeDown',

Args: [-0.2]

},

{

Desc: 'Switch to pause/play',

Key: 'space',

Command: 'switchPlayStatus'

},

{

Desc: 'Slow down playback -0.1',

Key: 'x',

Command: 'setPlaybackRateDown'

},

{

Desc: 'accelerated playback +0.1',

Key: 'c',

Command: 'setPlaybackRateUp'

},

{

Desc: 'Normal speed playback',

Key: 'z',

Command: 'resetPlaybackRate'

},

{

Desc: 'Set the playback speed of 1x',

Key: 'Digit1',

Command: 'setPlaybackRatePlus',

Args: 1

},

{

Desc: 'Set the playback speed of 1x',

Key: 'Numpad1',

Command: 'setPlaybackRatePlus',

Args: 1

},

{

Desc: 'Set the playback speed of 2x',

Key: 'Digit2',

Command: 'setPlaybackRatePlus',

Args: 2

},

{

Desc: 'Set the playback speed of 2x',

Key: 'Numpad2',

Command: 'setPlaybackRatePlus',

Args: 2

},

{

Desc: 'Set the playback speed of 3x',

Key: 'Digit3',

Command: 'setPlaybackRatePlus',

Args: 3

},

{

Desc: 'Set the playback speed of 3x',

Key: 'Numpad3',

Command: 'setPlaybackRatePlus',

Args: 3

},

{

Desc: 'Set the playback speed of 4x',

Key: 'Digit4',

Command: 'setPlaybackRatePlus',

Args: 4

},

{

Desc: 'Set the playback speed of 4x',

Key: 'Numpad4',

Command: 'setPlaybackRatePlus',

Args: 4

},

{

Desc: 'next frame',

Key: 'F',

Command: 'freezeFrame',

Args: 1

},

{

Desc: 'previous frame',

Key: 'D',

Command: 'freezeFrame',

Args: -1

},

{

Desc: 'Increase brightness',

Key: 'E',

Command: 'setBrightnessUp'

},

{

Desc: 'Reduce brightness',

Key: 'W',

Command: 'setBrightnessDown'

},

{

Desc: 'Increase contrast',

Key: 'T',

Command: 'setContrastUp'

},

{

Desc: 'Reduce contrast',

Key: 'R',

Command: 'setContrastDown'

},

{

Desc: 'Increase saturation',

Key: 'U',

Command: 'setSaturationUp'

},

{

Desc: 'Reduce saturation',

Key: 'Y',

Command: 'setSaturationDown'

},

{

Desc: 'Increase hue',

Key: 'O',

Command: 'setHueUp'

},

{

Desc: 'Reduce hue',

Key: 'I',

Command: 'setHueDown'

},

{

Desc: 'blurity increased by 1 px',

Key: 'K',

Command: 'setBlurUp'

},

{

Desc: 'Blur is reduced by 1 px',

Key: 'J',

Command: 'setBlurDown'

},

{

Desc: 'Image reset',

Key: 'Q',

Command: 'resetFilterAndTransform'

},

{

Desc: 'The picture rotates 90 degrees',

Key: 'S',

Command: 'setRotate'

},

{

Desc: 'Play the next episode',

Key: 'N',

Command: 'setNextVideo'

},

{

Desc: 'Execute JS script',

Key: 'ctrl+j ctrl+s',

Command: () => {

Alert('custom JS script');

},

When: ''

}

],

Enhance: {

/* If the default speed regulation logic is not disabled, the speed can be easily reset when multiple videos are switched, so this option is turned on by default */

blockSetPlaybackRate: true,

blockSetCurrentTime: false,

blockSetVolume: false,

allowExperimentFeatures: false,

allowExternalCustomConfiguration: false,

/* Whether to turn on the volume gain function */

allowAcousticGain: false,

/* Whether to turn on cross-domain control */

allowCrossOriginControl: true,

unfoldMenu: false

},

Debug: false

}

});

Async function initUiConfigManager () {

Const isUiConfigPage = location.href.indexOf('h5player.anzz.top/tools/json-editor') > -1;

Const isUiConfigMode = location.href.indexOf('saveHandlerName=saveH5PlayerConfig') > -1;

If (! isUiConfigPage || ! isUiConfigMode) return

Function init (pageWindow) {

Const config = JSON.parse(JSON.stringify(configManager.getConfObj()));

If (Array.isArray(config.hotkeys)) {

/* Add the disabled option to each item of hotkeys, so that an item can be quickly disabled or enabled on the interface side */

config.hotkeys.forEach(item => {

If (item.disabled === undefined) {

Item.disabled = false;

}

});

}

pageWindow.jsonEditor.set(config);

// pageWindow.jsonEditor.collapseAll()

pageWindow.jsonEditor.expandAll();

pageWindow.saveH5PlayerConfig = function (editor) {

Try {

Const newConfig = editor.get();

configManager.setGlobalStorageByObj(newConfig);

Alert('configuration has been updated');

} catch (e) {

alert(`Configuration format exception, save failed: ${e}`);

}

};

}

Let checkCount = 0;

Function checkJSONEditor (pageWindow) {

If (! pageWindow.JSONEditor) {

If (checkCount < 30) {

setTimeout(() => {

checkCount++;

checkJSONEditor(pageWindow);

}, 200);

}

Return

}

init(pageWindow);

}

Const pageWindow = await getPageWindow();

If (! pageWindow) {

Return

}

checkJSONEditor(pageWindow);

}

initUiConfigManager();

/* Save important original functions to prevent contamination by external scripts */

Const originalMethods = {

Object: {

defineProperty: Object.defineProperty,

defineProperties: Object.defineProperties

},

setInterval: window.setInterval,

setTimeout: window.setTimeout

};

/**

* Task Control Center Task Control Center

* It is used to configure all tasks that cannot be processed in general. If the full-screen mode of different websites is different, the full-screen logic of the website itself must be called to ensure the normal work of subtitles, bullet subtitles, etc.

**/

Class TCC {

Constructor (taskConf, doTaskFunc) {

This.conf = taskConf || {

/**

* Configuration example

* The parent key name corresponds to the first-level domain name,

* The name of the relevant function corresponding to the child key name, the click selector to be triggered by the function corresponding to the key value or the relevant function to be called

* Key values of all child levels support using selector triggers or function calls.

* If the child is configured, use the child configuration logic to operate, otherwise use the default logic.

* Note: include, except for these two sub-level key names, which are used for url range matching.

* */

'Demo.demo': {

fullScreen: '.fullscreen-btn',

exitFullScreen: '.exit-fullscreen-btn',

webFullScreen: function () {},

exitWebFullScreen: '.exit-fullscreen-btn',

autoPlay: '.player-start-btn',

Pause: '.player-pause',

Play: '.player-play',

switchPlayStatus: '.player-play',

playbackRate: function () {},

currentTime: function () {},

addCurrentTime: '.add-currenttime',

subtractCurrentTime: '.subtract-currenttime',

// Customize the execution method of shortcut keys. If it is a key combination, it must be in the order of ctrl-->shift-->alt. It can't be ignored. The key name must be all lowercase.

Shortcuts: {

/* Register the shortcut key to perform a custom callback operation */

Register: [

'Ctrl+shift+alt+c',

'Ctrl+shift+c',

'Ctrl+alt+c',

'Ctrl+c',

'C'

],

/* Callback operation of custom shortcut keys */

Callback: function (h5Player, taskConf, data) {

Const { event, player } = data;

Console.log(event, player);

}

},

/* The path information to be included under the current domain name, by default, all paths under the entire domain name must be regular */

Include: /^. */,

/* The path information to be excluded under the current domain name does not exclude any path by default. It must be regular */

Exclude: /\t/

}

};

// Define how to configure tasks through doTaskFunc callbacks

this.doTaskFunc = doTaskFunc instanceof Function ? doTaskFunc : function () {};

}

setTaskConf (taskConf) { this.conf = taskConf; }

/**

* Obtaining domain names, the current implementation method is not good, it needs to be modified, and the support for regional domain names (such as com.cn), level 3 and above is not good.

* */

getDomain () {

Const host = window.location.host;

Let domain = host;

Const tmpArr = host.split('.') ;

If (tmpArr.length > 2) {

tmpArr.shift();

Domain = tmpArr.join('.') ;

}

Return domain

}

/**

* Formatting configuration tasks

* @param isAll { boolean } - Optionally, only format the configuration tasks under the current domain name or host by default, and the task configuration under all domain names will be formatted by passing in true.

*/

formatTCC (isAll) {

Const t = this;

Const keys = Object.keys(t.conf);

Const domain = t.getDomain();

Const host = window.location.host;

Function formatter (item) {

Const defObj = {

Include: /^. */,

Exclude: /\t/

};

Item.include = item.include || defObj.include;

Item.exclude = item.exclude || defObj.exclude;

Return item

}

Const result = {};

keys.forEach(function (key) {

Let item = t[key];

If (isObj(item)) {

If (isAll) {

Item = formatter(item);

Result[key] = item;

} else {

If (key === host || key === domain) {

Item = formatter(item);

Result[key] = item;

}

}

}

});

Return result

}

/* Determine whether the provided configuration task is applicable to the current URL */

isMatch (taskConf) {

Const url = window.location.href;

Let isMatch = false;

If (! taskConf.include && ! taskConf.exclude) {

isMatch = true;

} else {

If (taskConf.include && taskConf.include.test(url)) {

isMatch = true;

}

If (taskConf.exclude && taskConf.exclude.test(url)) {

isMatch = false;

}

}

Return isMatch

}

/**

* Get the task configuration, you can only get the task configuration information under the current domain name.

* @param taskName {string} - Optionally specify specific tasks, return all types of task configurations by default

*/

getTaskConfig () {

Const t = this;

If (! t._hasFormatTCC_) {

t.formatTCC();

t._hasFormatTCC_ = true;

}

Const domain = t.getDomain();

Const taskConf = t.conf[window.location.host] || t.conf[domain];

If (taskConf && t.isMatch(taskConf)) {

Return taskConf

}

Return {}

}

/**

* Perform the corresponding tasks under the current page

* @param taskName {object|string} - Required, you can directly pass in the task configuration object, or you can use the string information of the task name to find out if there are any tasks to be executed.

* @param data {object} - optional, data passed to the callback function

*/

doTask (taskName, data) {

Const t = this;

Let isDo = false;

If (! taskName) return isDo

Const taskConf = isObj(taskName) ? taskName : t.getTaskConfig();

If (! isObj(taskConf) || ! taskConf[taskName]) return isDo

Const task = taskConf[taskName];

If (task) {

isDo = t.doTaskFunc(taskName, taskConf, data);

}

Return isDo

}

}

Class Debug {

Constructor (msg, printTime = false) {

Const t = this;

Msg = msg || 'debug message:';

T.log = t.createDebugMethod('log', null, msg);

T.error = t.createDebugMethod('error', null, msg);

T.info = t.createDebugMethod('info', null, msg);

T.warn = t.createDebugMethod('warn', null, msg);

}

Create (msg) {

Return new Debug(msg)

}

createDebugMethod (name, color, tipsMsg) {

Name = name || 'info';

Const bgColorMap = {

Info: '#2274A5',

Log: '#95B46A',

Warn: '#F5A623',

Error: '#D33F49'

};

Const printTime = this.printTime;

Return function () {

If (! window._debugMode_) {

Return false

}

Const msg = tipsMsg || 'debug message:';

Const arg = Array.from(arguments);

Arg.unshift(`color: white; background-color: ${color || bgColorMap[name] || '#95B46A'}`);

If (printTime) {

Const curTime = new Date();

Const H = curTime.getHours();

Const M = curTime.getMinutes();

Const S = curTime.getSeconds();

Arg.unshift(`%c [${H}:${M}:${S}] ${msg} `);

} else {

Arg.unshift(`%c ${msg} `);

}

Window.console[name].apply(window.console, arg);

}

}

isDebugMode () {

Return Boolean(window._debugMode_)

}

}

Var Debug$1 = new Debug();

Var debug = Debug$1.create('h5player message:');

Const $q = function (str) { return document.querySelector(str) };

/**

* Task Control Center Task Control Center

* It is used to configure all tasks that cannot be processed in general. If the full-screen mode of different websites is different, the full-screen logic of the website itself must be called to ensure the normal work of subtitles, bullet subtitles, etc.

* */

Const taskConf = {

/**

* Configuration example

* The parent key name corresponds to the first-level domain name,

* The name of the relevant function corresponding to the child key name, the click selector to be triggered by the function corresponding to the key value or the relevant function to be called

* Key values of all child levels support using selector triggers or function calls.

* If the child is configured, use the child configuration logic to operate, otherwise use the default logic.

* Note: include, except for these two sub-level key names, which are used for url range matching.

* */

'Demo.demo': {

// disable: true, // disable all functions of the plug-in under this domain name

fullScreen: '.fullscreen-btn',

exitFullScreen: '.exit-fullscreen-btn',

webFullScreen: function () {},

exitWebFullScreen: '.exit-fullscreen-btn',

autoPlay: '.player-start-btn',

// pause: ['.player-pause', '.player-pause02'], // When multiple situations correspond to different selectors, arrays can be used. The plug-in will traverse the selector until it is available.

Pause: '.player-pause',

Play: '.player-play',

switchPlayStatus: '.player-play',

playbackRate: function () {},

// playbackRate: true, // When setting a function to true, it means the ability to use the website's own ability to control the video while ignoring the plug-in.

currentTime: function () {},

addCurrentTime: '.add-currenttime',

subtractCurrentTime: '.subtract-currenttime',

// Customize the execution method of shortcut keys. If it is a key combination, it must be in the order of ctrl-->shift-->alt. It can't be ignored. The key name must be all lowercase.

Shortcuts: {

/* Register the shortcut key to perform a custom callback operation */

Register: [

'Ctrl+shift+alt+c',

'Ctrl+shift+c',

'Ctrl+alt+c',

'Ctrl+c',

'C'

],

/* Callback operation of custom shortcut keys */

Callback: function (h5Player, taskConf, data) {

Const { event, player } = data;

Console.log(event, player);

}

},

/* Prevent the website's own speed regulation behavior and enhance the ability to break through the speed regulation limit */

blockSetPlaybackRate: true,

/* Block the website's own playback progress control logic, and enhance the ability to break through the limits of progress control */

blockSetCurrentTime: true,

/* Prevent the volume control logic of the website itself and eliminate the tuning interference of the website itself */

blockSetVolume: true,

/* The path information to be included under the current domain name, by default, all paths under the entire domain name must be regular */

Include: /^. */,

/* The path information to be excluded under the current domain name does not exclude any path by default. It must be regular */

Exclude: /\t/

},

'Youtube.com': {

webFullScreen: 'button.ytp-size-button',

fullScreen: 'button.ytp-fullscreen-button',

Next: '.ytp-next-button',

Shortcuts: {

Register: [

'Escape'

],

Callback: function (h5Player, taskConf, data) {

Const { event } = data;

If (event.keyCode === 27) {

/* Cancel the next recommended video */

If (document.querySelector('.ytp-upnext').style.display ! == 'none') {

document.querySelector('.ytp-upnext-cancel-button').click();

}

}

}

}

},

'Netflix.com': {

// Stop using all functions of the plug-in under netflix

// disable: true,

fullScreen: 'button.button-nfplayerFullscreen',

addCurrentTime: 'button.button-nfplayerFastForward',

subtractCurrentTime: 'button.button-nfplayerBackTen',

/**

* Use netflix's own speed regulation, because the current plug-in can't solve the problem of service interruption caused by speed regulation.

* https://github.com/xxxily/h5player/issues/234

* https://github.com/xxxily/h5player/issues/317

* https://github.com/xxxily/h5player/issues/381

* https://github.com/xxxily/h5player/issues/179

* https://github.com/xxxily/h5player/issues/147

*/

playbackRate: true,

Shortcuts: {

/**

* TODO

* netflix Some users are used to using the F key for full screen, so the next frame function of the f key is blocked here.

* After opening the custom configuration capability in the future, let the user decide whether to block it or not.

*/

Register: [

'F'

],

Callback: function (h5Player, taskConf, data) {

Return true

}

}

},

'Bilibili.com': {

fullScreen: function () {

Const fullScreen = $q('.bpx-player-ctrl-full') || $q('.squirtle-video-fullscreen') || $q('.bilibili- Player-video-btn-fullscreen');

If (fullScreen) {

fullScreen.click();

Return true

}

},

webFullScreen: function () {

Const oldWebFullscreen = $q('.bilibili-player-video-web-fullscreen');

Const webFullscreenEnter = $q('.bpx-player-ctrl-web-enter') || $q('.squirtle-pagefullscreen-inactive ');

Const webFullscreenLeave = $q('.bpx-player-ctrl-web-leave') || $q('.squirtle-pagefullscreen-active') ;

If (oldWebFullscreen || (webFullscreenEnter && webFullscreenLeave)) {

Const webFullscreen = oldWebFullscreen || (getComputedStyle(webFullscreenLeave).display === 'none' ?  webFullscreenEnter : webFullscreenLeave);

webFullscreen.click();

/* Cancel the focus of the bullet screen box, interfering with the operation of shortcut keys */

setTimeout(function () {

Const danmaku = $q('.bpx-player-dm-input') || $q('.bilibili-player-video-danmaku-input');

Danmaku && danmaku.blur();

}, 1000 * 0.1);

Return true

}

},

autoPlay: ['.bpx-player-ctrl-play', '.squirtle-video-start', '.bilibili-player-video-btn-start'],

switchPlayStatus: ['.bpx-player-ctrl-play', '.squirtle-video-start', '.bilibili-player-video-btn-sta Rt'],

Next: ['.bpx-player-ctrl-next', '.squirtle-video-next', '.bilibili-player-video-btn-next', '.bpx-pla Yer-ctrl-btn[aria-label="next"]'],

Init: function (h5Player, taskConf) {},

Shortcuts: {

Register: [

'Escape'

],

Callback: function (h5Player, taskConf, data) {

Const { event } = data;

If (event.keyCode === 27) {

/* Exit the web page in full screen */

Const oldWebFullscreen = $q('.bilibili-player-video-web-fullscreen');

If (oldWebFullscreen && oldWebFullscreen.classList.contains('closed')) {

oldWebFullscreen.click();

} else {

Const webFullscreenLeave = $q('.bpx-player-ctrl-web-leave') || $q('.squirtle-pagefullscreen-active') ;

If (getComputedStyle(webFullscreenLeave).display ! == 'none') {

webFullscreenLeave.click();

}

}

}

}

}

},

'T.bilibili.com': {

fullScreen: 'button[name="fullscreen-button"]'

},

'Live.bilibili.com': {

Init: function () {

If (! JSON._stringifySource_) {

JSON._stringifySource_ = JSON.stringify;

JSON.stringify = function (arg1) {

Try {

Return JSON._stringifySource_.apply(this, arguments)

} catch (e) {

console.error('JSON.stringify explanation error: ', e, arg1);

}

};

}

},

fullScreen: '.bilibili-live-player-video-controller-fullscreen-btn button',

webFullScreen: '.bilibili-live-player-video-controller-web-fullscreen-btn button',

switchPlayStatus: '.bilibili-live-player-video-controller-start-btn button'

},

'Acfun.cn': {

fullScreen: '[data-bind-key="screenTip"]',

webFullScreen: '[data-bind-key="webTip"]',

switchPlayStatus: function (h5player) {

/* Unable to seize control, we have to delay the judgment of whether to intervene or not */

Const player = h5player.player();

Const status = player.paused;

setTimeout(function () {

If (status === player.paused) {

If (player.paused) {

Player.play();

} else {

Player.pause();

}

}

}, 200);

}

},

'Ixigua.com': {

fullScreen: ['xg-fullscreen.xgplayer-fullscreen', '.xgplayer-control-item__entry[aria-label="full screen"]', '.Xgplayer-control-item__entry[aria-label="exit full screen"]'],

webFullScreen: ['xg-cssfullscreen.xgplayer-cssfullscreen', '.xgplayer-control-item__entry[aria-label ="Theatre Mode"]', '.xgplayer-control-item__entry[aria-label="Exit Theater Mode"]']

},

'Tv.sohu.com': {

fullScreen: 'button[data-title="full screen"]',

webFullScreen: 'button[data-title="full screen"]'

},

'Iqiyi.com': {

fullScreen: '.iqp-btn-fullscreen',

webFullScreen: '.iqp-btn-webscreen',

Next: '.iqp-btn-next',

Init: function (h5Player, taskConf) {

// Hide the watermark

hideDom('.iqp-logo-box');

// Remove suspended ads

window.GM_addStyle(`

Div[templatetype="common_pause"]{ display:none }

.Iqp-logo-box{ display:none ! Important }

`);

}

},

'Youku.com': {

fullScreen: '.control-fullscreen-icon',

Next: '.control-next-video',

Init: function (h5Player, taskConf) {

// Hide the watermark

hideDom('.youku-layer-logo');

}

},

'Ted.com': {

fullScreen: 'button.Fullscreen'

},

'Qq.com': {

Pause: '.container_inner .txp-shadow-mod',

Play: '.container_inner .txp-shadow-mod',

Shortcuts: {

Register: ['c', 'x', 'z', '1', '2', '3', '4'],

Callback: function (h5Player, taskConf, data) {

Const { event } = data;

Const key = event.key.toLowerCase();

Const keyName = 'customShortcuts_' + key;

If (! h5Player[keyName]) {

/* Press the shortcut key for the first time and use the default logic to adjust the speed */

h5Player[keyName] = {

Time: Date.now(),

playbackRate: h5Player.playbackRate

};

Return false

} else {

/* The operation within 200ms after the first operation is controlled by the default logic */

If (Date.now() - h5Player[keyName].time < 200) {

Return false

}

/* Determine whether it needs to be downgraded, and use sessionStorage to adjust the speed */

If (h5Player[keyName] === h5Player.playbackRate || h5Player[keyName] === true) {

If (window.sessionStorage.playbackRate && /(c|x|z|1|2|3|4)/.test(key)) {

Const curSpeed = Number(window.sessionStorage.playbackRate);

Const perSpeed = curSpeed - 0.1 >= 0 ? curSpeed - 0.1 : 0.1;

Const nextSpeed = curSpeed + 0.1 <= 4 ? curSpeed + 0.1 : 4;

Let targetSpeed = curSpeed;

Switch (key) {

Case 'z':

targetSpeed = 1;

Break

Case 'c' :

targetSpeed = nextSpeed;

Break

Case 'x' :

targetSpeed = perSpeed;

Break

Default:

targetSpeed = Number(key);

Break

}

window.sessionStorage.playbackRate = targetSpeed;

h5Player.setCurrentTime(0.01, true);

h5Player.setPlaybackRate(targetSpeed, true);

Return true

}

/* The default speed regulation scheme is invalid, and the sessionStorage speed regulation scheme needs to be enabled */

h5Player[keyName] = true;

} else {

/* The default speed regulation scheme takes effect */

h5Player[keyName] = false;

}

}

}

},

fullScreen: 'txpdiv[data-report="window-fullscreen"]',

webFullScreen: 'txpdiv[data-report="browser-fullscreen"]',

Next: 'txpdiv[data-report="play-next"]',

Init: function (h5Player, taskConf) {

// Hide the watermark

hideDom('.txp-watermark');

hideDom('.txp-watermark-action');

},

Include: /(v.qq|sports.qq)/

},

'Pan.baidu.com': {

fullScreen: function (h5Player, taskConf) {

h5Player.player().parentNode.querySelector('.vjs-fullscreen-control').click();

}

},

// 'pornhub.com': {

// fullScreen: 'div[class*="icon-fullscreen"]',

// webFullScreen: 'div[class*="icon-size-large"]'

// },

'Facebook.com': {

fullScreen: function (h5Player, taskConf) {

Const actionBtn = h5Player.player().parentNode.querySelectorAll('button');

If (actionBtn && actionBtn.length > 3) {

/* Simulated click the penultimate button */

actionBtn[actionBtn.length - 2].click();

Return true

}

},

webFullScreen: function (h5Player, taskConf) {

Const actionBtn = h5Player.player().parentNode.querySelectorAll('button');

If (actionBtn && actionBtn.length > 3) {

/* Simulated click the penultimate button */

actionBtn[actionBtn.length - 2].click();

Return true

}

},

Shortcuts: {

/* Press the esc key in video mode to automatically return to the previous interface */

Register: [

'Escape'

],

/* Callback operation of custom shortcut keys */

Callback: function (h5Player, taskConf, data) {

eachParentNode(h5Player.player(), function (parentNode) {

If (parentNode.getAttribute('data-fullscreen-container') === 'true') {

Const goBackBtn = parentNode.parentNode.querySelector('div>a>i>u');

If (goBackBtn) {

goBackBtn.parentNode.parentNode.click();

}

Return true

}

});

}

}

},

'Douyu.com': {

fullScreen: function (h5Player, taskConf) {

Const player = h5Player.player();

Const container = player._fullScreen_.getContainer();

If (player._isFullScreen_) {

container.querySelector('div[title="exit window full screen"]').click();

} else {

container.querySelector('div[title="window full screen"]').click();

}

player._isFullScreen_ = ! player._isFullScreen_;

Return true

},

webFullScreen: function (h5Player, taskConf) {

Const player = h5Player.player();

Const container = player._fullScreen_.getContainer();

If (player._isWebFullScreen_) {

container.querySelector('div[title="exit web page full screen"]').click();

} else {

container.querySelector('div[title="full screen"]').click();

}

player._isWebFullScreen_ = ! player._isWebFullScreen_;

Return true

}

},

'Open.163.com': {

Init: function (h5Player, taskConf) {

Const player = h5Player.player();

/**

* Do not set the CORS logo so that cross-domain screenshots

* https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image

* https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes

*/

player.setAttribute('crossOrigin', 'anonymous');

}

},

'Agefans.tv': {

Init: function (h5Player, taskConf) {

h5Player.player().setAttribute('crossOrigin', 'anonymous');

}

},

'Chaoxing.com': {

fullScreen: '.vjs-fullscreen-control'

},

'Yixi.tv': {

Init: function (h5Player, taskConf) {

h5Player.player().setAttribute('crossOrigin', 'anonymous');

}

},

'Douyin.com': {

fullScreen: '.xgplayer-fullscreen',

webFullScreen: '.xgplayer-page-full-screen',

Next: ['.xgplayer-playswitch-next'],

Init: function (h5Player, taskConf) {

h5Player.player().setAttribute('crossOrigin', 'anonymous');

}

},

'Live.douyin.com': {

fullScreen: '.xgplayer-fullscreen',

webFullScreen: '.xgplayer-page-full-screen',

Next: ['.xgplayer-playswitch-next'],

Init: function (h5Player, taskConf) {

h5Player.player().setAttribute('crossOrigin', 'anonymous');

}

},

'Zhihu.com': {

fullScreen: ['button[aria-label="full screen"]', 'button[aria-label="exit full screen"]'],

Play: function (h5Player, taskConf, data) {

Const player = h5Player.player();

If (player && player.parentNode && player.parentNode.parentNode) {

Const maskWrap = player.parentNode.parentNode.querySelector('div~div:nth-child(3)');

If (maskWrap) {

Const mask = maskWrap.querySelector('div');

If (mask && mask.innerText === '') {

Mask.click();

}

}

}

},

Init: function (h5Player, taskConf) {

h5Player.player().setAttribute('crossOrigin', 'anonymous');

}

},

'Weibo.com': {

fullScreen: ['button.wbpv-fullscreen-control'],

// webFullScreen: ['div[title="close bullet layer"]', 'div.wbpv-open-layer-button']

webFullScreen: ['div.wbpv-open-layer-button']

}

};

Function h5PlayerTccInit (h5Player) {

Return new TCC(taskConf, function (taskName, taskConf, data) {

Try {

Const task = taskConf[taskName];

Const wrapDom = h5Player.getPlayerWrapDom();

If (! Task) { return }

If (taskName === 'shortcuts') {

If (isObj(task) && task.callback instanceof Function) {

Return task.callback(h5Player, taskConf, data)

}

} else if (task instanceof Function) {

Try {

Return task(h5Player, taskConf, data)

} catch (e) {

debug.error('Custom function execution failed in the task configuration center:', taskName, taskConf, data, e);

Return false

}

} else if (typeof task === 'boolean') {

Return task

} else {

Const selectorList = Array.isArray(task) ? Task: [task];

For (let i = 0; i < selectorList.length; i++) {

Const selector = selectorList[i];

/* Trigger the click event on the selector */

If (wrapDom && wrapDom.querySelector(selector)) {

// Find in the parent element of video in order to be as compatible with the logic of as many instances as possible.

wrapDom.querySelector(selector).click();

Return true

} else if (document.querySelector(selector)) {

document.querySelector(selector).click();

Return true

}

}

}

} catch (e) {

debug.error('Custom task execution failed in the task configuration center:', taskName, taskConf, data, e);

Return false

}

})

}

Function mergeTaskConf (config) {

Return mergeObj(taskConf, config)

}

/* ua camouflage configuration */

Const fakeConfig = {

// 'tv.cctv.com': userAgentMap.iPhone.chrome,

// 'v.qq.com': userAgentMap.iPad.chrome,

'Open.163.com': userAgentMap.iPhone.chrome,

'M.open.163.com': userAgentMap.iPhone.chrome,

/* Non-members of Baidu disk will use their own special player, resulting in the inability to use h5player, so they need to solve this problem by disguising ua */

'Pan.baidu.com': userAgentMap.iPhone.safari

};

Function setFakeUA (ua) {

Const host = window.location.host;

Ua = ua || fakeConfig[host];

/**

* Dynamic judgment of whether ua camouflage is necessary

* The following scheme is temporarily unavailable.

* Due to the inconsistency of domain names after some websites jump to the mobile terminal, a cross-domain problem is formed.

* As a result, the camouflage configuration cannot be synchronized and the continuous cycle jumps

* eg. open.163.com

* */

// let customUA = window.localStorage.getItem('_h5_player_user_agent_')

// debug.log(customUA, window.location.href, window.navigator.userAgent, document.referrer)

// if (customUA) {

// fakeUA(customUA)

// alert(customUA)

// } else {

// alert('ua false')

// }

Ua && fakeUA(ua);

}

/**

* Element full-screen API, compatible with web full-screen

*/

hackAttachShadow();

Class FullScreen {

Constructor (dom, pageMode) {

This.dom = dom;

this.shadowRoot = null;

this.fullStatus = false;

// Default full-screen mode, if the pageMode is passed in, it means that the page is in full-screen operation.

this.pageMode = pageMode || false;

Const fullPageStyle = `

._Webfullscreen_box_size_ {

Width: 100% ! Important;

Height: 100% ! Important;

}

._Webfullscreen_ {

Display: block ! Important;

Position: fixed ! Important;

Width: 100% ! Important;

Height: 100% ! Important;

Top: 0 ! Important;

Left: 0 ! Important;

Background: #000 ! Important;

Z-index: 999999 ! Important;

}

._Webfullscreen_zindex_ {

Z-index: 999999 ! Important;

}

`;

/* Insert the style into the global page */

If (! window._hasInitFullPageStyle_ && window.GM_addStyle) {

window.GM_addStyle(fullPageStyle);

window._hasInitFullPageStyle_ = true;

}

/* Insert the style into shadowRoot */

Const shadowRoot = isInShadow(dom, true);

If (shadowRoot) {

this.shadowRoot = shadowRoot;

loadCSSText(fullPageStyle, 'fullPageStyle', shadowRoot);

}

Const t = this;

window.addEventListener('keyup', (event) => {

Const key = event.key.toLowerCase();

If (key === 'escape') {

If (t.isFull()) {

T.exit();

} else if (t.isFullScreen()) {

t.exitFullScreen();

}

}

}, true);

this.getContainer();

}

eachParentNode (dom, fn) {

Let parent = dom.parentNode;

While (parent && parent.classList) {

Const isEnd = fn(parent, dom);

Parent = parent.parentNode;

If (isEnd) {

Break

}

}

}

getContainer () {

Const t = this;

If (t._container_) return t._container_

Const d = t.dom;

Const domBox = d.getBoundingClientRect();

Let container = d;

t.eachParentNode(d, function (parentNode) {

Const noParentNode = ! parentNode || ! parentNode.getBoundingClientRect;

If (noParentNode || parentNode.getAttribute('data-fullscreen-container')) {

Container = parentNode;

Return true

}

Const parentBox = parentNode.getBoundingClientRect();

Const isInsideTheBox = parentBox.width <= domBox.width && parentBox.height <= domBox.height;

If (isInsideTheBox) {

Container = parentNode;

} else {

Return true

}

});

container.setAttribute('data-fullscreen-container', 'true');

T._container_ = container;

Return container

}

isFull () {

Return this.dom.classList.contains('_webfullscreen_') || this.fullStatus

}

isFullScreen () {

Const d = document;

Return !!( D.fullscreen || d.webkitIsFullScreen || d.mozFullScreen ||

d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement)

}

enterFullScreen () {

Const c = this.getContainer();

Const enterFn = c.requestFullscreen || c.webkitRequestFullScreen || c.mozRequestFullScreen || c.msRe questFullScreen;

enterFn && enterFn.call(c);

}

Enter () {

Const t = this;

If (t.isFull()) return

Const container = t.getContainer();

Let needSetIndex = false;

If (t.dom === container) {

needSetIndex = true;

}

Function addFullscreenStyleToParentNode (node) {

t.eachParentNode(node, function (parentNode) {

parentNode.classList.add('_webfullscreen_');

If (container === parentNode || needSetIndex) {

needSetIndex = true;

parentNode.classList.add('_webfullscreen_zindex_');

}

});

}

addFullscreenStyleToParentNode(t.dom);

/* Determine whether dom itself needs to add webfullscreen style */

If (t.dom.parentNode) {

Const domBox = t.dom.getBoundingClientRect();

Const domParentBox = t.dom.parentNode.getBoundingClientRect();

If (domParentBox.width - domBox.width >= 5) {

t.dom.classList.add('_webfullscreen_');

}

If (t.shadowRoot && t.shadowRoot._shadowHost) {

Const shadowHost = t.shadowRoot._shadowHost;

Const shadowHostBox = shadowHost.getBoundingClientRect();

If (shadowHostBox.width <= domBox.width) {

shadowHost.classList.add('_webfullscreen_');

addFullscreenStyleToParentNode(shadowHost);

}

}

}

Const fullScreenMode = ! t.pageMode;

If (fullScreenMode) {

t.enterFullScreen();

}

this.fullStatus = true;

}

exitFullScreen () {

Const d = document;

Const exitFn = d.exitFullscreen || d.webkitExitFullscreen || d.mozCancelFullScreen || d.msExitFullsc Reen;

exitFn && exitFn.call(d);

}

Exit () {

Const t = this;

Function removeFullscreenStyleToParentNode (node) {

t.eachParentNode(node, function (parentNode) {

parentNode.classList.remove('_webfullscreen_');

parentNode.classList.remove('_webfullscreen_zindex_');

});

}

removeFullscreenStyleToParentNode(t.dom);

t.dom.classList.remove('_webfullscreen_');

If (t.shadowRoot && t.shadowRoot._shadowHost) {

Const shadowHost = t.shadowRoot._shadowHost;

shadowHost.classList.remove('_webfullscreen_');

removeFullscreenStyleToParentNode(shadowHost);

}

Const fullScreenMode = ! t.pageMode;

If (fullScreenMode || t.isFullScreen()) {

t.exitFullScreen();

}

this.fullStatus = false;

}

Toggle () {

this.isFull() ? This.exit() : this.enter();

}

}

/*!

* @name videoCapturer.js

* @version 0.0.1

* @author Blaze

* @date 2019/9/21 12:03

* @github https://github.com/xxxily

*/

Async function setClipboard (blob) {

If (navigator.clipboard) {

Navigator.clipboard.write([

// eslint-disable-next-line no-undef

New ClipboardItem({

[Blob.type]: blob

})

]).Then(() => {

console.info('[setClipboard] clipboard suc');

}).Catch((e) => {

console.error('[setClipboard] clipboard err', e);

});

} else {

console.error('The current website does not support writing data to the clipboard, see:\n https://developer.mozilla.org/en-US/docs/Web/API/Clipboard');

}

}

Var videoCapturer = {

/**

* Take a screenshot

* @param video {dom} - required video dom tag

* @returns {boolean}

*/

Capture (video, download, title) {

If (! Video) return false

Const t = this;

Const currentTime = `${Math.floor(video.currentTime / 60)}'${(video.currentTime % 60).toFixed(3)}''` ;

Const captureTitle = title || `${document.title}_${currentTime}`;

/* Screenshot core logic */

video.setAttribute('crossorigin', 'anonymous');

Const canvas = document.createElement('canvas');

Canvas.width = video.videoWidth;

Canvas.height = video.videoHeight;

Const context = canvas.getContext('2d');

context.drawImage(video, 0, 0, canvas.width, canvas.height);

If (download) {

T.download(canvas, captureTitle, video);

} else {

T.previe(canvas, captureTitle);

}

Return canvas

},

/**

* Preview the content of the intercepted screen

* @param canvas

*/

Previe (canvas, title) {

Canvas.style = 'max-width:100%';

Const previewPage = window.open('', '_blank');

previewPage.document.title = `capture previe - ${title || 'Untitled'}`;

previewPage.document.body.style.textAlign = 'center';

previewPage.document.body.style.background = '#000';

previewPage.document.body.appendChild(canvas);

},

/**

* canvas Download the intercepted content

* @param canvas

*/

Download (canvas, title, video) {

Title = title || 'videoCapturer_' + Date.now();

Try {

canvas.toBlob(function (blob) {

Const el = document.createElement('a');

El.download = `${title}.jpg`;

El.href = URL.createObjectURL(blob);

El.click();

/* Try to copy to the clipboard */

setClipboard(blob);

}, 'image/jpg', 0.99);

} catch (e) {

videoCapturer.previe(canvas, title);

Console.error ('Video source is restricted by the CORS logo and cannot download screenshots directly, see:\n https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS');

Console.error(video, e);

}

}

};

/**

* Mouse event observation object

* Used to realize the penetration response of mouse events, different from pointer-events:none

* pointer-events: none is to set the current layer to allow penetration

* MouseObserver is: even if you don't know how many layers of occlusion there are on the target, it can also respond to mouse events.

*/

Class MouseObserver {

Constructor (observeOpt) {

// eslint-disable-next-line no-undef

This.observer = new IntersectionObserver((infoList) => {

infoList.forEach((info) => {

info.target.IntersectionObserverEntry = info;

});

}, observeOpt || {});

this.observeList = [];

}

_Observe (target) {

Let hasObserve = false;

For (let i = 0; i < this.observeList.length; i++) {

Const el = this.observeList[i];

If (target === el) {

hasObserve = true;

Break

}

}

If (! hasObserve) {

This.observer.observe(target);

this.observeList.push(target);

}

}

_Unobserve (target) {

This.observer.unobserve(target);

Const newObserveList = [];

this.observeList.forEach((el) => {

If (el ! == target) {

newObserveList.push(el);

}

});

this.observeList = newObserveList;

}

/**

* Add event binding

* @param target {element} - required dom object to bind the event

* @param type {string} - Required events to be bound, only mouse events are supported

* @param listener {function} - Required Response function when the trigger condition is met

*/

On (target, type, listener, options) {

Const t = this;

T._observe(target);

If (! target.MouseObserverEvent) {

target.MouseObserverEvent = {};

}

target.MouseObserverEvent[type] = true;

If (! t._mouseObserver_) {

t._mouseObserver_ = {};

}

If (! t._mouseObserver_[type]) {

t._mouseObserver_[type] = [];

window.addEventListener(type, (event) => {

t.observeList.forEach((target) => {

Const isVisibility = target.IntersectionObserverEntry && target.IntersectionObserverEntry.intersecti onRatio > 0;

Const isReg = target.MouseObserverEvent[event.type] === true;

If (isVisibility && isReg) {

/* Determine whether it meets the conditions for triggering the listener event */

Const bound = target.getBoundingClientRect();

Const offsetX = event.x - bound.x;

Const offsetY = event.y - bound.y;

Const isNeedTap = offsetX <= bound.width && offsetX >= 0 && offsetY <= bound.height && offsetY >= 0;

If (isNeedTap) {

/* Execute monitoring callback */

Const listenerList = t._mouseObserver_[type];

listenerList.forEach((listener) => {

If (listener instanceof Function) {

Listener.call(t, event, {

X: offsetX,

Y: offsetY

}, target);

}

});

}

}

});

}, options);

}

/* Add the monitoring callback to the event queue */

If (listener instanceof Function) {

t._mouseObserver_[type].push(listener);

}

}

/**

* Unbind the event

* @param target {element} - required dom object to remove the event

* @param type {string} - Required events to be removed, only mouse events are supported

* @param listener {function} - Required Response function when binding events

* @returns {boolean}

*/

Off (target, type, listener) {

Const t = this;

If (! Target || ! Type || ! Listener || ! t._mouseObserver_ || ! t._mouseObserver_[type] || ! target.MouseObserverEvent || ! target.MouseObserverEvent[type]) return false

Const newListenerList = [];

Const listenerList = t._mouseObserver_[type];

Let isMatch = false;

listenerList.forEach((listenerItem) => {

If (listenerItem === listener) {

isMatch = true;

} else {

newListenerList.push(listenerItem);

}

});

If (isMatch) {

t._mouseObserver_[type] = newListenerList;

/* The listener has been completely removed */

If (newListenerList.length === 0) {

Delete target.MouseObserverEvent[type];

}

/* Remove the observation object when MouseObserverEvent is empty */

If (JSON.stringify(target.MouseObserverEvent[type]) === '{}') {

T._unobserve(target);

}

}

}

}

/**

* Simple i18n library

*/

Class I18n {

Constructor (config) {

This._languages = {};

This._locale = this.getClientLang();

this._defaultLanguage = '';

This.init(config);

}

Init (config) {

If (! Config) return false

Const t = this;

T._locale = config.locale || t._locale;

/* Specify the language environment currently in use, which does not need to be specified by default and will be automatically read */

T._languages = config.languages || t._languages;

t._defaultLanguage = config.defaultLanguage || t._defaultLanguage;

}

Use () {}

T (path) {

Const t = this;

Let result = t.getValByPath(t._languages[t._locale] || {}, path);

/* Version return */

If (! Result && t._locale ! == t._defaultLanguage) {

Result = t.getValByPath(t._languages[t._defaultLanguage] || {}, path);

}

Return result || ''

}

/* Current language value */

Language () {

Return this._locale

}

Languages () {

Return this._languages

}

changeLanguage (locale) {

If (this._languages[locale]) {

This._locale = locale;

Return locale

} else {

Return false

}

}

/**

* Get the value in the object according to the text path

* @param obj {Object} - Required Object to be operated

* @param path {String} - Required path information

* @returns {*}

*/

getValByPath (obj, path) {

Path = path || '';

Const pathArr = path.split('.') ;

Let result = obj;

/* Recursive extraction result value */

For (let i = 0; i < pathArr.length; i++) {

If (! Result) break

Result = result[pathArr[i]];

}

Return result

}

/* Get the current language environment of the client */

getClientLang () {

Return navigator.languages ? Navigator.languages[0] : navigator.language

}

}

Var zhCN = {

Website: 'Script official website',

About: 'about',

Issues: 'Question Feedback',

Setting: 'setting',

Hotkeys: 'shortcut keys',

Donate: 'Please invite the author for a cup of coffee👍',

Recommend: '❤️ Free ChatGPT ❤️',

enableScript: 'Enable script',

disableScript: 'Disable script',

openCrossOriginFramePage: 'Open cross-domain pages separately',

disableInitAutoPlay: 'Prohibit automatic video playback on this website',

enableInitAutoPlay: 'Allow automatic video playback on this website',

restoreConfiguration: 'Restore the global default configuration',

blockSetPlaybackRate: 'Disable the default speed adjustment logic',

blockSetCurrentTime: 'Disable the default playback progress control logic',

blockSetVolume: 'Disable the default volume control logic',

unblockSetPlaybackRate: 'Allow default speed adjustment logic',

unblockSetCurrentTime: 'Allow default playback progress control logic',

unblockSetVolume: 'Allow default volume control logic',

allowAcousticGain: 'Turn on volume gain ability',

notAllowAcousticGain: 'Disable volume gain ability',

allowCrossOriginControl: 'Turn on cross-domain control',

notAllowCrossOriginControl: 'Disable cross-domain control capability',

allowExperimentFeatures: 'Turn on experimental functions',

notAllowExperimentFeatures: 'Disable experimental functions',

experimentFeaturesWarning: 'Experimental functions are easy to cause some uncertain problems, please turn them on carefully',

allowExternalCustomConfiguration: 'Turn on external customization capabilities',

notAllowExternalCustomConfiguration: 'Turn off external customization capabilities',

configFail: 'configuration failed',

globalSetting: 'Global Settings',

localSetting: 'Only for this website',

openDebugMode: 'Turn on debugging mode',

closeDebugMode: 'Turn off debugging mode',

unfoldMenu: 'Expand menu',

foldMenu: 'fold menu',

tipsMsg: {

Playspeed: 'Playback speed:',

Forward: 'forward:',

Backward: 'back:',

Seconds: 'seconds',

Volume: 'Volume:',

Nextframe: 'Position: Next Frame',

Previousframe: 'Position: previous frame',

Stopframe: 'stop frame picture:',

Play: 'play',

Pause: 'pause',

Arpl: 'Allow automatic resumption of playback progress',

Drpl: 'Prohibit automatic resumption of playback progress',

Brightness: 'image brightness: ',

Contrast: 'Image contrast:',

Saturation: 'Image saturation:',

Hue: 'Image hue: ',

Blur: 'Image blur:',

Imgattrreset: 'Image attributes: reset',

Imgrotate: 'Picture rotation:',

Onplugin: 'Enable h5Player plug-in',

Offplugin: 'disable h5Player plug-in',

Globalmode: 'Global mode:',

Playbackrestored: 'Restore the last playback progress for you',

Playbackrestoreoff: 'The function of resuming playback progress has been disabled. Press SHIFT+R to turn on this function',

Horizontal: 'horizontal displacement:',

Vertical: 'vertical displacement: ',

horizontalMirror: 'horizontal mirroring',

verticalMirror: 'vertical mirroring',

Videozoom: 'Video scaling rate:'

}

};

Var enUS = {

Website: 'Script website',

About: 'About',

Issues: 'Issues',

Setting: 'Setting',

Hotkeys: 'Hotkeys',

Donate: 'Donate',

enableScript: 'enable script',

disableScript: 'disable script',

openCrossOriginFramePage: 'Open cross-domain pages alone',

disableInitAutoPlay: 'Prohibit autoplay of videos on this site',

enableInitAutoPlay: 'Allow autoplay videos on this site',

restoreConfiguration: 'Restore the global default configuration',

blockSetPlaybackRate: 'Disable default speed regulation logic',

blockSetCurrentTime: 'Disable default playback progress control logic',

blockSetVolume: 'Disable default volume control logic',

unblockSetPlaybackRate: 'Allow default speed adjustment logic',

unblockSetCurrentTime: 'Allow default playback progress control logic',

unblockSetVolume: 'Allow default volume control logic',

allowAcousticGain: 'Turn on volume boost',

notAllowAcousticGain: 'Disable volume boost ability',

allowCrossOriginControl: 'Enable cross-domain control capability',

notAllowCrossOriginControl: 'Disable cross-domain control capabilities',

allowExperimentFeatures: 'Turn on experimental features',

notAllowExperimentFeatures: 'Disable experimental features',

experimentFeaturesWarning: 'Experimental features are likely to cause some uncertain problems, pleas E turn on with caution',

allowExternalCustomConfiguration: 'Enable external customization capabilities',

notAllowExternalCustomConfiguration: 'Turn off external customization capabilities',

configFail: 'Configuration failed',

globalSetting: 'Global Settings',

localSetting: 'For this site only',

openDebugMode: 'Enable debug mode',

closeDebugMode: 'Turn off debug mode',

unfoldMenu: 'Expand menu',

foldMenu: 'Collapse menu',

tipsMsg: {

Playspeed: 'Speed: ',

Forward: 'Forward: ',

Backward: 'Backward: ',

Seconds: 'sec',

Volume: 'Volume: ',

Nextframe: 'Next frame',

Previousframe: 'Previous frame',

Stopframe: 'Stopframe: ',

Play: 'Play',

Pause: 'Pause',

Arpl: 'Allow auto resume playback progress',

Drpl: 'Disable auto resume playback progress',

Brightness: 'Brightness: ',

Contrast: 'Contrast: ',

Saturation: 'Saturation: ',

Hue: 'HUE: ',

Blur: 'Blur: ',

Imgattrreset: 'Attributes: reset',

Imgrotate: 'Picture rotation: ',

Onplugin: 'ON h5Player plugin',

Offplugin: 'OFF h5Player plugin',

Globalmode: 'Global mode: ',

Playbackrestored: 'Restored the last playback progress for you',

Playbackrestoreoff: 'The function of restoring the playback progress is disabled. Press SHIFT+R to turn on the function',

Horizontal: 'Horizontal displacement: ',

Vertical: 'Vertical displacement: ',

horizontalMirror: 'Horizontal mirror',

verticalMirror: 'vertical mirror',

Videozoom: 'Video zoom: '

},

Demo: 'demo-test'

};

Var ru = {

Website: 'официальный сайт скрипта',

About: 'около',

Issues: 'обратная связь',

Setting: 'установка',

Hotkeys: 'горячие клавиши',

Donate: 'пожертвовать',

enableScript: 'включить скрипт',

disableScript: 'отключить скрипт',

openCrossOriginFramePage: 'Открывать только междоменные страницы',

disableInitAutoPlay: 'Запретить автовоспроизведение видео на этом сайте',

enableInitAutoPlay: 'Разрешить автоматическое воспроизведение видео на этом сайте',

restoreConfiguration: 'Восстановить глобальную конфигурацию по умолчанию',

blockSetPlaybackRate: 'Отключить логику регулирования скорости по умолчанию',

blockSetCurrentTime: 'Отключить логику управления ходом воспроизведения по умол

blockSetVolume: 'Отключить логику управления громкостью по умолчанию',

unblockSetPlaybackRate: 'Разрешить логику регулировки скорости по умолчанию',

unblockSetCurrentTime: 'Разрешить логику управления ходом воспроизведения по умо

unblockSetVolume: 'Разрешить логику управления громкостью по умолчанию',

allowAcousticGain: 'Включите усиление громкости',

notAllowAcousticGain: 'Отключить возможность увеличения громкости',

allowCrossOriginControl: 'Включить возможность междоменного контроля',

notAllowCrossOriginControl: 'Отключить возможности междоменного контроля',

allowExperimentFeatures: 'Включить экспериментальные функции',

notAllowExperimentFeatures: 'Отключить экспериментальные функции',

experimentFeaturesWarning: 'Экспериментальные функции могут вызвать определенные про� Их с осторожностью.',

allowExternalCustomConfiguration: 'Включить возможности внешней настройки',

notAllowExternalCustomConfiguration: 'Отключить возможности внешней настройки',

configFail: 'Ошибка конфигурации',

globalSetting: 'Глобальные настройки',

localSetting: 'только для этого сайта',

openDebugMode: 'Включить режим отладки',

closeDebugMode: 'отключить режим отладки',

unfoldMenu: 'развернуть меню',

foldMenu: 'свернуть меню',

tipsMsg: {

Playspeed: 'Скорость: ',

Forward: 'Вперёд: ',

Backward: 'Назад: ',

Seconds: ' сек',

Volume: 'Громкость: ',

Nextframe: 'Следующий кадр',

Previousframe: 'Предыдущий кадр',

Stopframe: 'Стоп-кадр: ',

Play: 'Запуск',

Pause: 'Пауза',

Arpl: 'Разрешить автоматическое возобновление прогресса воспроизведени�

Drpl: 'Запретить автоматическое возобновление прогресса воспроизведения

Brightness: 'Яркость: ',

Contrast: 'Контраст: ',

Saturation: 'Насыщенность: ',

Hue: 'Оттенок: ',

Blur: 'Размытие: ',

Imgattrreset: 'Атрибуты: сброс',

Imgrotate: 'Поворот изображения: ',

Onplugin: 'ВКЛ: плагин воспроизведения',

Offplugin: 'ВЫКЛ: плагин воспроизведения',

Globalmode: 'Глобальный режим:',

Playbackrestored: 'Восстановлен последний прогресс воспроизведения',

Playbackrestoreoff: 'Функция восстановления прогресса воспроизведения отключена. Нажмите SHIFT + R, чтобы включить функцию',

Horizontal: 'Горизонтальное смещение: ',

Vertical: 'Вертикальное смещение: ',

horizontalMirror: 'Горизонтальное зеркало',

verticalMirror: 'вертикальное зеркало',

Videozoom: 'Увеличить видео: '

}

};

Var zhTW = {

Website: 'footbook official website',

About: 'about',

Issues: 'feedback',

Setting: 'setting',

Hotkeys: 'shortcut keys',

Donate: 'Appreciation',

enableScript: 'Enable script',

disableScript: 'Disable script',

openCrossOriginFramePage: 'Open cross-domain pages alone',

disableInitAutoPlay: 'Prohibit automatic video playback on this website',

enableInitAutoPlay: 'Allow automatic video playback on this website',

restoreConfiguration: 'Restore the global default configuration',

blockSetPlaybackRate: 'Disable default speed adjustment logic',

blockSetCurrentTime: 'Disable default playback progress control logic',

blockSetVolume: 'Disable default volume control logic',

unblockSetPlaybackRate: 'Allow default speed adjustment logic',

unblockSetCurrentTime: 'Allow default playback progress control logic',

unblockSetVolume: 'Allow default volume control logic',

allowAcousticGain: 'Turn on volume gain ability',

notAllowAcousticGain: 'Disable volume gain ability',

allowCrossOriginControl: 'Open cross-domain control capability',

notAllowCrossOriginControl: 'Disable cross-domain control capability',

allowExperimentFeatures: 'Turn on experimental functions',

notAllowExperimentFeatures: 'Disable experimental functions',

experimentFeaturesWarning: 'Experimental functions are easy to cause some uncertain problems, please open them carefully',

allowExternalCustomConfiguration: 'Open external customization capabilities',

notAllowExternalCustomConfiguration: 'Turn off external customization capabilities',

configFail: 'configuration failure',

globalSetting: 'Global Settings',

localSetting: 'Only for this website',

openDebugMode: 'Turn on debug mode',

closeDebugMode: 'Close the debug mode',

unfoldMenu: 'unfold the menu',

foldMenu: 'fold menu',

tipsMsg: {

Playspeed: 'Playback speed:',

Forward: 'forward:',

Backward: 'backward:',

Seconds: 'seconds',

Volume: 'Volume:',

Nextframe: 'Position: Next frame',

Previousframe: 'Position: previous frame',

Stopframe: 'stop frame: ',

Play: 'play',

Pause: 'pause',

Arpl: 'Allow automatic resumption of playback progress',

Drpl: 'Prohibit automatic resumption of playback progress',

Brightness: 'image brightness:',

Contrast: 'image contrast: ',

Saturation: 'image saturation: ',

Hue: 'image hue: ',

Blur: 'image blur: ',

Imgattrreset: 'image attribute: reset',

Imgrotate: 'picture rotation:',

Onplugin: 'Enable h5Player plug-in',

Offplugin: 'disable h5Player plug-in',

Globalmode: 'Global mode:',

Playbackrestored: 'Restore the last playback progress for you',

Playbackrestoreoff: 'Restore playback progress function has been disabled, press SHIFT+R to turn on this function',

Horizontal: 'horizontal displacement:',

Vertical: 'vertical displacement: ',

horizontalMirror: 'horizontal mirror',

verticalMirror: 'vertical mirror',

Videozoom: 'Video scaling rate:'

}

};

Const messages = {

'zh-CN': zhCN,

Zh: zhCN,

'zh-HK': zhTW,

'zh-TW': zhTW,

'en-US': enUS,

En: enUS,

Ru: ru

};

Const i18n = new I18n({

defaultLanguage: 'en',

/* Specify the language environment currently in use, which does not need to be specified by default and will be automatically read */

// locale: 'zh-TW',

Languages: messages

});

/* Used to obtain globally unique id */

Let __globalId__ = 0;

Function getId () {

If (window.GM_getValue && window.GM_setValue) {

Let gID = window.GM_getValue('_global_id_');

If (! gID) gID = 0;

gID = Number(gID) + 1;

window.GM_setValue('_global_id_', gID);

Return gID

} else {

/* If it is not under the oil monkey plug-in, the id is the page's own id */

__globalId__ = Number(__globalId__) + 1;

Return __globalId__

}

}

Let curTabId = null;

/**

* Get the Id number of the current TAB label, which can be used for iframe to determine whether you are under the same TAB label.

* @returns {Promise<any>}

*/

Function getTabId () {

Return new Promise((resolve, reject) => {

If (window.GM_getTab instanceof Function) {

window.GM_getTab(function (obj) {

If (! obj.tabId) {

obj.tabId = getId();

window.GM_saveTab(obj);

}

/* Update the id number of the current Tab every time you get it */

curTabId = obj.tabId;

resolve(obj.tabId);

});

} else {

/* Under the non-oil monkey plug-in, it is impossible to determine whether the iframe is under the same tab */

resolve(Date.now());

}

})

}

/* Initialize curTabId at the beginning, so that there is no need to obtain Tabid asynchronously in the future, and */

getTabId();

/*!

* @name monkeyMsg.js

* @version 0.0.1

* @author Blaze

* @date 2019/9/21 14:22

*/

// import debug from './debug'

/**

* Extract the value of the object data that can be stored in GM_setValue

* @param obj {objcet} - Required Object data to be stored

* @param deep {number} - Optional If the object hierarchy is very deep, the recursive hierarchy must be limited, and the default cannot exceed 3 levels.

* @returns {{}}

*/

Function extractDatafromOb (obj, deep) {

Deep = deep || 1;

If (deep > 3) return {}

Const result = {};

If (typeof obj === 'object') {

For (const key in obj) {

Const val = obj[key];

Const valType = typeof val;

If (valType === 'number' || valType === 'string' || valType === 'boolean') {

Object.defineProperty(result, key, {

Value: val,

Writable: true,

Configurable: true,

Enumerable: true

});

} else if (valType === 'object' && Object.prototype.propertyIsEnumerable.call(obj, key)) {

/* Perform recursive extraction */

Result[key] = extractDatafromOb(val, deep + 1);

} else if (valType === 'array') {

Result[key] = val;

}

}

}

Return result

}

Const monkeyMsg = {

/**

* Sending messages, in addition to sending messages normally, will also add all kinds of necessary information.

* @param name {string} - required to send to that field, and it must be consistent when receiving to monitor the correct

* @param data {Any} - Required data to be sent

* @param throttleInterval - optional, because there will be inexplicable repeated sending. In order to eliminate the side effects of repeated sending, a throtttle restriction logic is introduced, that is, it can only be sent once in a certain time interval, and the excess number of times will be automatically discarded. , default 80ms

* @returns {Promise<void>}

*/

Send (name, data, throttleInterval = 80) {

If (! window.GM_getValue || ! window.GM_setValue) {

Return false

}

/* Prevent frequent sending of modification events */

Const oldMsg = window.GM_getValue(name);

If (oldMsg && oldMsg.updateTime) {

Const interval = Math.abs(Date.now() - oldMsg.updateTime);

If (interval < throttleInterval) {

Return false

}

}

Const msg = {

/* The data sent */

Data,

/* Supplementary label ID to determine whether it is under the same tab */

tabId: curTabId || 'undefined',

/* Title information of the page source of the supplementary message */

Title: document.title,

/* Page source information of supplementary messages */

Referrer: extractDatafromOb(window.location),

/* The time of the last update of the data */

updateTime: Date.now()

};

If (typeof data === 'object') {

Msg.data = extractDatafromOb(data);

}

window.GM_setValue(name, msg);

// debug.info(`[monkeyMsg-send][${name}]`, msg)

},

Set: (name, data) => monkeyMsg.send(name, data),

Get: (name) => window.GM_getValue && window.GM_getValue(name),

On: (name, fn) => window.GM_addValueChangeListener && window.GM_addValueChangeListener(name, functio N (name, oldVal, newVal, remote) {

// debug.info(`[monkeyMsg-on][${name}]`, oldVal, newVal, remote)

/* Whether the source of the supplement is from the judgment field of the same Tab */

newVal.originTab = newVal.tabId === curTabId;

Fn instanceof Function && fn.apply(null, arguments);

}),

Off: (listenerId) => window.GM_removeValueChangeListener && window.GM_removeValueChangeListener(list enerId),

/**

* Perform the message broadcast of monkeyMsg, which is sent every two seconds, and any other page can receive the broadcast information to update some variable information.

* Mainly used to solve the problem that the variable state cannot be updated correctly through setInterval or setTimeout due to non-operation or abnormal execution frequency caused by the page visual state and performance policy.

* See: https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API

* Broadcasting cannot be 100% guaranteed not to be affected by the performance strategy, but as long as a web page is running in the foreground, it can work normally.

* @param handler {Function} - Required Callback function when receiving broadcast information

* @returns

*/

Broadcast (handler) {

Const broadcastName = '__monkeyMsgBroadcast__';

monkeyMsg._monkeyMsgBroadcastHandler_ = monkeyMsg._monkeyMsgBroadcastHandler_ || [];

Handler instanceof Function && monkeyMsg._monkeyMsgBroadcastHandler_.push(handler);

If (monkeyMsg._hasMonkeyMsgBroadcast_) {

Return broadcastName

}

monkeyMsg.on(broadcastName, function () {

monkeyMsg._monkeyMsgBroadcastHandler_.forEach(handler => {

Handler.apply(null, arguments);

});

});

setInterval(function () {

/* Prevent multiple pages from initiating broadcast information in batches by limiting the time interval */

Const data = monkeyMsg.get(broadcastName);

If (data && Date.now() - data.updateTime < 1000 * 2) {

Return false

}

monkeyMsg.send(broadcastName, {});

}, 1000 * 2);

Return broadcastName

}

};

/*!

* @name crossTabCtl.js

* @description Cross-Tab control script logic

* @version 0.0.1

* @author Blaze

* @date 2019/11/21 11:56 a.m.

* @github https://github.com/xxxily

*/

Const crossTabCtl = {

/* When performing cross-Tab control, exclude forwarding shortcut keys to reduce interference with important shortcut keys */

excludeShortcuts (event) {

If (! Event || typeof event.keyCode === 'undefined') {

Return false

}

Const excludeKeyCode = ['c', 'v', 'f', 'd'];

If (event.ctrlKey || event.metaKey) {

Const key = event.key.toLowerCase();

If (excludeKeyCode.includes(key)) {

Return true

} else {

Return false

}

} else {

Return false

}

},

/* The leavepictureinpicture event will not be called when exiting unexpectedly, so the picture-in-picture information can only be updated through polling */

updatePictureInPictureInfo () {

setInterval(function () {

If (document.pictureInPictureElement) {

monkeyMsg.send('globalPictureInPictureInfo', {

usePictureInPicture: true

});

}

}, 1000 * 1.5);

/**

* Updating globalPictureInPictureInfo through setInterval will not be updated due to page visibility and performance strategy.

* See: https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API

* So calibrate the globalPictureInPictureInfo status by adding the monkeyMsg broadcasting mechanism.

*/

monkeyMsg.broadcast(function () {

// console.log('[monkeyMsg][broadcast]', ...arguments)

If (document.pictureInPictureElement) {

monkeyMsg.send('globalPictureInPictureInfo', {

usePictureInPicture: true

});

}

});

},

/* Determine whether the picture-in-picture function is currently turned on */

hasOpenPictureInPicture () {

Const data = monkeyMsg.get('globalPictureInPictureInfo');

/* The global information update time difference of picture-in-picture is within 3s, so it is considered that the picture-in-picture mode is currently turned on, otherwise it may be unexpectedly exited without modifying the value of usePictureInPicture, resulting in misjudgment */

If (data && data.data) {

If (data.data.usePictureInPicture) {

Return Math.abs(Date.now() - data.updateTime) < 1000 * 3

} else {

/**

* If it is detected that the picture-in-picture has been closed, but it has not been closed for too long, it is allowed to allow users to control the video across TAB for a short period of time.

* For example: pause video playback

*/

Return Math.abs(Date.now() - data.updateTime) < 1000 * 15

}

}

Return false

},

/**

* Determine whether it is necessary to send cross-tab control key information

*/

isNeedSendCrossTabCtlEvent () {

Const t = crossTabCtl;

/* After the picture-in-picture is turned on, it is judged that it is not the same Tab to send the event */

Const data = monkeyMsg.get('globalPictureInPictureInfo');

If (t.hasOpenPictureInPicture() && data.tabId ! == curTabId) {

Return true

} else {

Return false

}

},

crossTabKeydownEvent (event) {

Const t = crossTabCtl;

/* Do not execute any shortcut keys in an editable element */

Const target = event.composedPath ? event.composedPath()[0] || event.target : event.target;

If (isEditableTarget(target)) return

If (t.isNeedSendCrossTabCtlEvent() && isRegisterKey(event) && ! t.excludeShortcuts(event)) {

// Prevent event bubbles and default events

event.stopPropagation();

event.preventDefault();

/* Broadcast key messages for cross-Tab control */

// globalKeydownEvent events are already included in keydownEvent

// monkeyMsg.send('globalKeydownEvent', event)

Return true

}

},

bindCrossTabEvent () {

Const t = crossTabCtl;

If (t._hasBindEvent_) return

document.removeEventListener('keydown', t.crossTabKeydownEvent);

document.addEventListener('keydown', t.crossTabKeydownEvent, true);

t._hasBindEvent_ = true;

},

Init () {

Const t = crossTabCtl;

t.updatePictureInPictureInfo();

t.bindCrossTabEvent();

}

};

/*!

* @name index.js

* @description hookJs JS AOP section programming auxiliary library

* @version 0.0.1

* @author Blaze

* @date 2020/10/22 17:40

* @github https://github.com/xxxily

*/

Const win = typeof window === 'undefined' ? Global : window;

Const toStr = Function.prototype.call.bind(Object.prototype.toString);

/* Special scenario, if Boolean is also hooked, it is easy to cause call overflow, so you need to use the native Boolean */

Const toBoolean = Boolean.originMethod ? Boolean.originMethod : Boolean;

Const util = {

toStr,

isObj: obj => toStr(obj) === '[object Object]',

/* Determine whether it is a reference type for broader scenarios */

isRef: obj => typeof obj === 'object',

isReg: obj => toStr(obj) === '[object RegExp]',

isFn: obj => obj instanceof Function,

isAsyncFn: fn => toStr(fn) === '[object AsyncFunction]',

isPromise: obj => toStr(obj) === '[object Promise]',

firstUpperCase: str => str.replace(/^\S/, s => s.toUpperCase()),

toArr: arg => Array.from(Array.isArray(arg) ? Arg: [arg]),

Debug: {

Log () {

Let log = win.console.log;

/* If the log is also hooked, use the log function before it is not hooked */

If (log.originMethod) { log = log.originMethod; }

If (win._debugMode_) {

Log.apply(win.console, arguments);

}

}

},

/* Get the key name that contains itself, inheritance, enumerable and non-enumerable */

getAllKeys (obj) {

Const tmpArr = [];

For (const key in obj) { tmpArr.push(key); }

Const allKeys = Array.from(new Set(tmpArr.concat(Reflect.ownKeys(obj))));

Return allKeys

}

};

Class HookJs {

Constructor (useProxy) {

this.useProxy = useProxy || false;

this.hookPropertiesKeyName = '_hookProperties' + Date.now();

}

hookJsPro () {

Return new HookJs(true)

}

_addHook (hookMethod, fn, type, classHook) {

Const hookKeyName = type + 'Hooks';

Const hookMethodProperties = hookMethod[this.hookPropertiesKeyName];

If (! hookMethodProperties[hookKeyName]) {

hookMethodProperties[hookKeyName] = [];

}

/* Register (store) the hook function to be called, while preventing duplicate registration */

Let hasSameHook = false;

For (let i = 0; i < hookMethodProperties[hookKeyName].length; i++) {

If (fn === hookMethodProperties[hookKeyName][i]) {

hasSameHook = true;

Break

}

}

If (! hasSameHook) {

fn.classHook = classHook || false;

hookMethodProperties[hookKeyName].push(fn);

}

}

_runHooks (parentObj, methodName, originMethod, hookMethod, target, ctx, args, classHook, hookProper tiesKeyName) {

Const hookMethodProperties = hookMethod[hookPropertiesKeyName];

Const beforeHooks = hookMethodProperties.beforeHooks || [];

Const afterHooks = hookMethodProperties.afterHooks || [];

Const errorHooks = hookMethodProperties.errorHooks || [];

Const hangUpHooks = hookMethodProperties.hangUpHooks || [];

Const replaceHooks = hookMethodProperties.replaceHooks || [];

Const execInfo = {

Result: null,

Error: null,

Args: args,

Type: ''

};

Function runHooks (hooks, type) {

Let hookResult = null;

execInfo.type = type || '';

If (Array.isArray(hooks)) {

hooks.forEach(fn => {

If (util.isFn(fn) && classHook === fn.classHook) {

hookResult = fn(args, parentObj, methodName, originMethod, execInfo, ctx);

}

});

}

Return hookResult

}

Const runTarget = (function () {

If (classHook) {

Return function () {

// eslint-disable-next-line new-cap

Return new target(...args)

}

} else {

Return function () {

Return target.apply(ctx, args)

}

}

})();

Const beforeHooksResult = runHooks(beforeHooks, 'before');

/* Instructions that support terminating subsequent calls */

If (beforeHooksResult && beforeHooksResult === 'STOP-INVOKE') {

Return beforeHooksResult

}

If (hangUpHooks.length || replaceHooks.length) {

/**

* When hangUpHooks or replaceHooks exists, the original function will not be triggered.

* In essence, hangUpHooks and replaceHooks are the same, but the external definition description is inconsistent and classification is inconsistent.

*/

runHooks(hangUpHooks, 'hangUp');

runHooks(replaceHooks, 'replace');

} else {

If (errorHooks.length) {

Try {

execInfo.result = runTarget();

} catch (err) {

execInfo.error = err;

Const errorHooksResult = runHooks(errorHooks, 'error');

/* Support instructions that do not throw exceptions after executing errors */

If (errorHooksResult && errorHooksResult === 'SKIP-ERROR') ; else {

Throw err

}

}

} else {

execInfo.result = runTarget();

}

}

/**

* Execute afterHooks. If the Promise is returned, further subdivision should be carried out theoretically.

* However, after adding the subdivision processing logic, it was found that the performance dropped sharply and it was prone to various exceptions, so I decided not to deal with the Promise situation in the hook.

* The following is the original Promise processing logic. After adding it, it will cause the following websites to get stuck or inaccessible:

* wenku.baidu.com

* https://pubs.rsc.org/en/content/articlelanding/2021/sc/d1sc01881g#! divAbstract

* https://www.elsevier.com/connect/coronavirus-information-center

*/

// if (execInfo.result && execInfo.result.then && util.isPromise(execInfo.result)) {

// execInfo.result.then(function (data) {

// execInfo.result = data

// runHooks(afterHooks, 'after')

// return Promise.resolve.apply(ctx, arguments)

// }).catch(function (err) {

// execInfo.error = err

// runHooks(errorHooks, 'error')

// return Promise.reject.apply(ctx, arguments)

// })

// }

runHooks(afterHooks, 'after');

Return execInfo.result

}

_proxyMethodcGenerator (parentObj, methodName, originMethod, classHook, context, proxyHandler) {

Const t = this;

Const useProxy = t.useProxy;

Let hookMethod = null;

/* If there is a cache, use the cached hookMethod */

If (t.isHook(originMethod)) {

hookMethod = originMethod;

} else if (originMethod[t.hookPropertiesKeyName] && t.isHook(originMethod[t.hookPropertiesKeyName].h ookMethod)) {

hookMethod = originMethod[t.hookPropertiesKeyName].hookMethod;

}

If (hookMethod) {

If (! hookMethod[t.hookPropertiesKeyName].isHook) {

/* Re-annotate the hooked state */

hookMethod[t.hookPropertiesKeyName].isHook = true;

Util.debug.log(`[hook method] ${util.toStr(parentObj)} ${methodName}`);

}

Return hookMethod

}

/* Using Proxy mode to hook can get more features, but the performance will also be slightly worse */

If (useProxy && Proxy) {

/* Note: Using Proxy agent, hookMethod and originMethod will share the same object */

Const handler = { ...proxyHandler };

/* The following writing determines that proxyHandler cannot overwrite construct and apply operations */

If (classHook) {

Handler.construct = function (target, args, newTarget) {

Context = context || this;

Return t._runHooks(parentObj, methodName, originMethod, hookMethod, target, context, args, true, t.h ookPropertiesKeyName)

};

} else {

Handler.apply = function (target, ctx, args) {

Ctx = context || ctx;

Return t._runHooks(parentObj, methodName, originMethod, hookMethod, target, ctx, args, false, t.hook PropertiesKeyName)

};

}

hookMethod = new Proxy(originMethod, handler);

} else {

hookMethod = function () {

/**

* Note that you can't pass context = context || this

* Then pass the context as ctx.

* This will cause ctx reference errors

*/

Const ctx = context || this;

Return t._runHooks(parentObj, methodName, originMethod, hookMethod, originMethod, ctx, arguments, cl assHook, t.hookPropertiesKeyName)

};

/* Ensure that the sub-object and prototype chain are consistent with originMethod */

Const keys = Reflect.ownKeys(originMethod);

keys.forEach(keyName => {

Try {

Object.defineProperty(hookMethod, keyName, {

Get: function () {

Return originMethod[keyName]

},

Set: function (val) {

originMethod[keyName] = val;

}

});

} catch (err) {

// An exception occurs when setting defineProperty, which may lead to the loss of some functions of hookMethod, or may not be affected.

util.debug.log(`[proxyMethodcGenerator] hookMethod defineProperty abnormal. hookMethod:${methodName }, definePropertyName:${keyName}`, err);

}

});

hookMethod.prototype = originMethod.prototype;

}

Const hookMethodProperties = hookMethod[t.hookPropertiesKeyName] = {};

hookMethodProperties.originMethod = originMethod;

hookMethodProperties.hookMethod = hookMethod;

hookMethodProperties.isHook = true;

hookMethodProperties.classHook = classHook;

Util.debug.log(`[hook method] ${util.toStr(parentObj)} ${methodName}`);

Return hookMethod

}

_getObjKeysByRule (obj, rule) {

Let excludeRule = null;

Let result = rule;

If (util.isObj(rule) && rule.include) {

excludeRule = rule.exclude;

Rule = rule.include;

Result = rule;

}

/**

* The difference between for in, Object.keys and Reflect.ownKeys is:

* https://es6.ruanyifeng.com/#docs/object#%E5%B1%9E%E6%80%A7%E7%9A%84%E9%81%8D%E5%8E%86

*/

If (rule === '*') {

Result = Object.keys(obj);

} else if (rule === '**') {

Result = Reflect.ownKeys(obj);

} else if (rule === '***') {

Result = util.getAllKeys(obj);

} else if (util.isReg(rule)) {

Result = util.getAllKeys(obj).filter(keyName => rule.test(keyName));

}

/* If there is an exclusion rule, it needs to be excluded */

If (excludeRule) {

Result = Array.isArray(result) ? Result: [result];

If (util.isReg(excludeRule)) {

Result = result.filter(keyName => ! excludeRule.test(keyName));

} else if (Array.isArray(excludeRule)) {

Result = result.filter(keyName => ! excludeRule.includes(keyName));

} else {

Result = result.filter(keyName => excludeRule ! == keyName);

}

}

Return util.toArr(result)

}

/**

* Determine whether a function has been hooked

* @param fn {Function} - Required Functions to Judge

* @returns {boolean}

*/

isHook (fn) {

If (! Fn || ! fn[this.hookPropertiesKeyName]) {

Return false

}

Const hookMethodProperties = fn[this.hookPropertiesKeyName];

Return util.isFn(hookMethodProperties.originMethod) && fn ! == hookMethodProperties.originMethod

}

/**

* Determine whether a value under the object has the condition of hook

* Note: Having the hook condition and whether the value can be directly modified are two different things.

* When performing the hook, you should also check whether descriptor.writable is false.

* If it is false, it needs to be modified to true to successfully hook.

* @param parentObj

* @param keyName

* @returns {boolean}

*/

isAllowHook (parentObj, keyName) {

/* Some objects will set getter to throw an error when reading the value, so you need to try catch to determine whether the property can be read normally */

Try { if (! parentObj[keyName]) return false } catch (e) { return false }

Const descriptor = Object.getOwnPropertyDescriptor(parentObj, keyName);

Return !( Descriptor && descriptor.configurable === false)

}

/**

* hook core function

* @param parentObj {Object} - Required parent object dependent on by the hook function

* @param hookMethods {Object|Array|RegExp|string} - Required Matching rules for the function name or function name of the hooked function

* @param fn {Function} - Required callback method after hook

* @param type {String} - Optional default before, specify the timing to run the hook function callback, optional string: before, after, replace, error, hangUp

* @param classHook {Boolean} - Optional default false, specify whether it is a hook for new (class) operation

* @param context {Object} - Optionally specify the context object when running the hooked function

* @param proxyHandler {Object} - Optional. It is only valid when you hook with Proxy. By default, you use Proxy's apply handler to hook. If you have special needs, you can also configure yourself. Handler to achieve more complex functions

* Note: If you don't use Proxy to hook, you can get higher performance, but it also means that the versatility is worse. For the non-objects in the hook HTMLElement.prototype and EventTarget.prototype The function of the instance often fails, resulting in an error executed by the hook function.

* @returns {boolean}

*/

Hook (parentObj, hookMethods, fn, type, classHook, context, proxyHandler) {

/* Support reference in the form of object */

Const opts = arguments[0];

If (util.isObj(opts) && opts.parentObj && opts.hookMethods) {

parentObj = opts.parentObj;

hookMethods = opts.hookMethods;

Fn = opts.fn;

Type = opts.type;

classHook = opts.classHook;

Context = opts.context;

proxyHandler = opts.proxyHandler;

}

classHook = toBoolean(classHook);

Type = type || 'before';

If ((! util.isRef(parentObj) && ! util.isFn(parentObj)) || ! util.isFn(fn) || ! hookMethods) {

Return false

}

Const t = this;

hookMethods = t._getObjKeysByRule(parentObj, hookMethods);

hookMethods.forEach(methodName => {

If (! t.isAllowHook(parentObj, methodName)) {

util.debug.log(`${util.toStr(parentObj)} [${methodName}] does not support modification`);

Return false

}

Const descriptor = Object.getOwnPropertyDescriptor(parentObj, methodName);

If (descriptor && descriptor.writable === false) {

Object.defineProperty(parentObj, methodName, { writable: true });

}

Const originMethod = parentObj[methodName];

Let hookMethod = null;

/* Non-function cannot perform hook operation */

If (! util.isFn(originMethod)) {

Return false

}

hookMethod = t._proxyMethodcGenerator(parentObj, methodName, originMethod, classHook, context, proxy Handler);

Const hookMethodProperties = hookMethod[t.hookPropertiesKeyName];

If (hookMethodProperties.classHook ! == classHook) {

util.debug.log(`${util.toStr(parentObj)} [${methodName}] Cannot support functions hook and classes h Ook at the same time `);

Return false

}

/* Use hookMethod to take over the method that needs to be hooked */

If (parentObj[methodName] ! == hookMethod) {

parentObj[methodName] = hookMethod;

}

t._addHook(hookMethod, fn, type, classHook);

});

}

/* The hook specially designed for the new operation is essentially an alias of the hook function, which can pass less of the parameter classHook and clarify the semantics */

hookClass (parentObj, hookMethods, fn, type, context, proxyHandler) {

Return this.hook(parentObj, hookMethods, fn, type, true, context, proxyHandler)

}

/**

* Cancel the hook of a function

* @param parentObj {Object} - Required To cancel the parent object dependent on the hook function

* @param hookMethods {Object|Array|RegExp|string} - Required To cancel the matching rule of the function name or function name of the hooked function

* @param type {String} - Optional default before, specify the type of hook to be canceled, optional string: before, after, replace, error, hangUp, cancel if this option is not specified All callbacks under all types

* @param fn {Function} - Required to cancel the specified hook callback function. If this option is not specified, cancel all callbacks under the corresponding type.

* @returns {boolean}

*/

unHook (parentObj, hookMethods, type, fn) {

If (! util.isRef(parentObj) || ! hookMethods) {

Return false

}

Const t = this;

hookMethods = t._getObjKeysByRule(parentObj, hookMethods);

hookMethods.forEach(methodName => {

If (! t.isAllowHook(parentObj, methodName)) {

Return false

}

Const hookMethod = parentObj[methodName];

If (! t.isHook(hookMethod)) {

Return false

}

Const hookMethodProperties = hookMethod[t.hookPropertiesKeyName];

Const originMethod = hookMethodProperties.originMethod;

If (type) {

Const hookKeyName = type + 'Hooks';

Const hooks = hookMethodProperties[hookKeyName] || [];

If (fn) {

/* Delete the specified hook function under the specified type */

For (let i = 0; i < hooks.length; i++) {

If (fn === hooks[i]) {

hookMethodProperties[hookKeyName].splice(i, 1);

util.debug.log(`[unHook ${hookKeyName} func] ${util.toStr(parentObj)} ${methodName}`, fn);

Break

}

}

} else {

/* Delete all hook functions under the specified type */

If (Array.isArray(hookMethodProperties[hookKeyName])) {

hookMethodProperties[hookKeyName] = [];

util.debug.log(`[unHook all ${hookKeyName}] ${util.toStr(parentObj)} ${methodName}`);

}

}

} else {

/* Completely restore the hooked function */

If (util.isFn(originMethod)) {

parentObj[methodName] = originMethod;

Delete parentObj[methodName][t.hookPropertiesKeyName];

// Object.keys(hookMethod).forEach(keyName => {

// if (/Hooks$/.test(keyName) && Array.isArray(hookMethod[keyName])) {

// hookMethod[keyName] = []

// }

// })

//

// hookMethod.isHook = false

// parentObj[methodName] = originMethod

// delete parentObj[methodName].originMethod

// delete parentObj[methodName].hookMethod

// delete parentObj[methodName].isHook

// delete parentObj[methodName].isClassHook

util.debug.log(`[unHook method] ${util.toStr(parentObj)} ${methodName}`);

}

}

});

}

_Hook (args, type) {

Const t = this;

Return function (obj, hookMethods, fn, classHook, context, proxyHandler) {

Const opts = args[0];

If (util.isObj(opts) && opts.parentObj && opts.hookMethods) {

Opts.type = type;

}

Return t.hook.apply(t, args)

}

}

/* hook before the source function runs */

Before (obj, hookMethods, fn, classHook, context, proxyHandler) {

Return this.hook(obj, hookMethods, fn, 'before', classHook, context, proxyHandler)

}

/* hook after the source function is running */

After (obj, hookMethods, fn, classHook, context, proxyHandler) {

Return this.hook(obj, hookMethods, fn, 'after', classHook, context, proxyHandler)

}

/* Replace the function to be hooked, no longer run the source function, and replace it with other logic */

Replace (obj, hookMethods, fn, classHook, context, proxyHandler) {

Return this.hook(obj, hookMethods, fn, 'replace', classHook, context, proxyHandler)

}

/* hook when the source function runs incorrectly */

Error (obj, hookMethods, fn, classHook, context, proxyHandler) {

Return this.hook(obj, hookMethods, fn, 'error', classHook, context, proxyHandler)

}

/* The underlying implementation logic is the same as replace. It replaces the function to be hooked and no longer runs the source function, but in order to clarify the semantics, the source function is suspended and no longer executes, and in principle, no other logic is executed. If you want to execute other logic, please use replace hoo K */

hangUp (obj, hookMethods, fn, classHook, context, proxyHandler) {

Return this.hook(obj, hookMethods, fn, 'hangUp', classHook, context, proxyHandler)

}

}

Const hookJs = new HookJs(true);

/**

* It is forbidden to lock playbackRate

* Some players will prevent the modification of playbackRate

* Anti-block the modification of playbackRate through hackDefineProperty

* Reference: https://greasyfork.org/zh-CN/scripts/372673

*/

Function hackDefineProperCore (target, key, option) {

If (option && target && target instanceof Element && typeof key === 'string' && key.indexOf('on') >= 0) {

Option.configurable = true;

}

If (target instanceof HTMLVideoElement) {

Const unLockProperties = ['playbackRate', 'currentTime', 'volume', 'muted'];

If (unLockProperties.includes(key)) {

Try {

debug.log(`Prohibit locking ${key}`);

Option.configurable = true;

Key = key + '_hack';

} catch (e) {

debug.error(`Prohibit locking ${key} failed! `, e);

}

}

}

Return [target, key, option]

}

Function hackDefineProperOnError (args, parentObj, methodName, originMethod, execInfo, ctx) {

debug.error(`${methodName} error:`, execInfo.error);

/* Ignore execution exception */

Return 'SKIP-ERROR'

}

Function hackDefineProperty () {

hookJs.before(Object, 'defineProperty', function (args, parentObj, methodName, originMethod, execInf O, ctx) {

Const option = args[2];

Const ele = args[0];

Const key = args[1];

Const afterArgs = hackDefineProperCore(ele, key, option);

afterArgs.forEach((arg, i) => {

Args[i] = arg;

});

});

hookJs.before(Object, 'defineProperties', function (args, parentObj, methodName, originMethod, execI Nfo, ctx) {

Const properties = args[1];

Const ele = args[0];

If (ele && ele instanceof Element) {

Object.keys(properties).forEach(key => {

Const option = properties[key];

Const afterArgs = hackDefineProperCore(ele, key, option);

Args[0] = afterArgs[0];

Delete properties[key];

properties[afterArgs[1]] = afterArgs[2];

});

}

});

hookJs.error(Object, 'defineProperty', hackDefineProperOnError);

hookJs.error(Object, 'defineProperties', hackDefineProperOnError);

}

/*!

* @name menuCommand.js

* @version 0.0.1

* @author Blaze

* @date 2019/9/21 14:22

*/

Const monkeyMenu = {

menuIds: {},

On (title, fn, accessKey) {

If (title instanceof Function) {

Title = title();

}

If (window.GM_registerMenuCommand) {

Const menuId = window.GM_registerMenuCommand(title, fn, accessKey);

this.menuIds[menuId] = {

Title,

Fn,

accessKey

};

Return menuId

}

},

Off (id) {

If (window.GM_unregisterMenuCommand) {

Delete this.menuIds[id];

/**

* When the registered buttons are removed in batches, the menu residue of digital title will be left on some poor-performance machines.

* It should be a bug caused by the plug-in itself, which cannot be solved for the time being.

* So there is no menu removal here for the time being, and the tampermonkey will automatically merge the menu with the same name.

*/

// return window.GM_unregisterMenuCommand(id)

}

},

Clear () {

Object.keys(this.menuIds).forEach(id => {

This.off(id);

});

},

/**

* Bulk registration through menu configuration, and all previously registered menus will be cleared before registration.

* @param {array|function} menuOpts menu configuration, if it is a function, the function will be called to get the menu configuration, and when the menu is clicked, the menu will be recreated to achieve dynamic update of the menu.

*/

Build (menuOpts) {

This.clear();

If (Array.isArray(menuOpts)) {

menuOpts.forEach(menu => {

If (menu.disable === true) { return }

This.on(menu.title, menu.fn, menu.accessKey);

});

} else if (menuOpts instanceof Function) {

Const menuList = menuOpts();

If (Array.isArray(menuList)) {

this._menuBuilder_ = menuOpts;

menuList.forEach(menu => {

If (menu.disable === true) { return }

Const menuFn = () => {

Try {

Menu.fn.apply(menu, arguments);

} catch (e) {

console.error('[monkeyMenu]', menu.title, e);

}

// After each menu click, re-register the menu to ensure that the status of the menu is up to date.

setTimeout(() => {

// console.log('[monkeyMenu rebuild]', menu.title)

this.build(this._menuBuilder_);

}, 100);

};

This.on(menu.title, menuFn, menu.accessKey);

});

} else {

console.error('monkeyMenu build error, no menuList return', menuOpts);

}

}

}

};

/*!

* @name menuManager.js

* @description Menu Manager

* @version 0.0.1

* @author xxxily

* @date 2022/08/11 10:05

* @github https://github.com/xxxily

*/

Function refreshPage (msg) {

Msg = msg || 'The configuration has been changed, refresh the page immediately to make the configuration take effect?' ;

Const status = confirm(msg);

If (status) {

Window.location.reload();

}

}

Let monkeyMenuList = [

{

Title: i18n.t('website'),

Fn: () => {

openInTab('https://h5player.anzz.top/');

}

},

{

Title: i18n.t('hotkeys'),

Fn: () => {

openInTab('https://h5player.anzz.top/home/Introduction.html#%E5%BF%AB%E6%8D%B7%E9%94%AE%E5%88%97%E8% A1%A8');

}

},

{

Title: i18n.t('issues'),

Disable: ! configManager.get('enhance.unfoldMenu'),

Fn: () => {

openInTab('https://github.com/xxxily/h5player/issues');

}

},

{

Title: i18n.t('donate'),

Fn: () => {

openInTab('https://h5player.anzz.top/#%E8%B5%9E');

}

},

/* Promotion position, only useful things are recommended */

{

Title: i18n.t('recommend'),

Disable: ! I18n.language().includes('zh'),

Fn: () => {

Function randomZeroOrOne () {

Return Math.floor(Math.random() * 2)

}

If (randomZeroOrOne()) {

openInTab('https://hello-ai.anzz.top/home/');

} else {

openInTab('https://github.com/xxxily/hello-ai');

}

}

},

{

Title: i18n.t('globalSetting'),

Disable: ! I18n.language().includes('zh'),

Fn: () => {

// openInTab(`https://h5player.anzz.top/tools/json-editor/index.html? mode=code&referrer=${encodeURIComponent(window.location.href)}`)

openInTab('https://h5player.anzz.top/tools/json-editor/index.html? mode=tree&saveHandlerName=saveH5PlayerConfig&expandAll=true&json={}');

}

},

{

Title: `${configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu')} 「${i18n.t('globalSetting')}」`,

Fn: () => {

Const confirm = window.confirm(configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu'));

If (confirm) {

configManager.setGlobalStorage('enhance.unfoldMenu', ! configManager.get('enhance.unfoldMenu'));

Window.location.reload();

}

}

},

{

Title: i18n.t('setting'),

Disable: true,

Fn: () => {

openInTab('https://h5player.anzz.top/configure/', null, true);

Window.alert ('Function development, please look forward to it...') ;

}

},

{

Title: `${configManager.get('enable') ? i18n.t('disableScript') : i18n.t('enableScript')} 「${i18n.t('localSetting')}」`,

Disable: ! configManager.get('enhance.unfoldMenu'),

Fn: () => {

Const confirm = window.confirm(configManager.get('enable') ? i18n.t('disableScript') : i18n.t('enableScript'));

If (confirm) {

configManager.setLocalStorage('enable', ! configManager.get('enable'));

Window.location.reload();

}

}

},

{

Title: i18n.t('restoreConfiguration'),

Disable: ! configManager.get('enhance.unfoldMenu'),

Fn: () => {

configManager.clear();

refreshPage();

}

}

];

/* Menu constructor (must be a function to dynamically update the menu status after clicking) */

Function menuBuilder () {

Return monkeyMenuList

}

/* Registration dynamic menu */

Function menuRegister () {

monkeyMenu.build(menuBuilder);

}

/**

* Add menu items

* @param {Object|Array} menuOpts menu configuration items, multiple configuration items are represented by arrays

*/

Function addMenu (menuOpts, before) {

menuOpts = Array.isArray(menuOpts) ? menuOpts: [menuOpts];

menuOpts = menuOpts.filter(item => item.title && ! Item.disabled);

If (before) {

/* Add the menu to the front of other menus */

monkeyMenuList = menuOpts.concat(monkeyMenuList);

} else {

monkeyMenuList = monkeyMenuList.concat(menuOpts);

}

/* Re-register menu */

menuRegister();

}

/**

* Register the menu related to h5player. You will only register if a media label is detected.

*/

Function registerH5playerMenus (h5player) {

Const t = h5player;

Const player = t.player();

Const foldMenu = ! configManager.get('enhance.unfoldMenu');

If (player && ! t._hasRegisterH5playerMenus_) {

Const menus = [

{

Title: () => i18n.t('openCrossOriginFramePage'),

Disable: foldMenu || ! isInCrossOriginFrame(),

Fn: () => {

openInTab(location.href);

}

},

{

Title: () => `${configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime')} 「${i18n.t('localSetting')}」`,

Type: 'local',

Disable: foldMenu,

Fn: () => {

Const confirm = window.confirm(configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime'));

If (confirm) {

configManager.setLocalStorage('enhance.blockSetCurrentTime', ! configManager.get('enhance.blockSetCurrentTime'));

Window.location.reload();

}

}

},

{

Title: () => `${configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume')} 「${i18n.t('localSetting')}」`,

Type: 'local',

Disable: foldMenu,

Fn: () => {

Const confirm = window.confirm(configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume'));

If (confirm) {

configManager.setLocalStorage('enhance.blockSetVolume', ! configManager.get('enhance.blockSetVolume'));

Window.location.reload();

}

}

},

{

Title: () => `${configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate')} 「${i18n.t('globalSetting')}」`,

Type: 'global',

Disable: foldMenu,

Fn: () => {

Const confirm = window.confirm(configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate'));

If (confirm) {

/* Double speed parameter, can only be set globally */

configManager.setGlobalStorage('enhance.blockSetPlaybackRate', ! configManager.get('enhance.blockSetPlaybackRate'));

Window.location.reload();

}

}

},

{

Title: () => `${configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain')} 「${i18n.t('globalSetting')}」`,

Type: 'global',

Disable: foldMenu,

Fn: () => {

Const confirm = window.confirm(configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain'));

If (confirm) {

configManager.setGlobalStorage('enhance.allowAcousticGain', ! configManager.getGlobalStorage('enhance.allowAcousticGain'));

Window.location.reload();

}

}

},

{

Title: () => `${configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl')} "${i18n.t('globalSetting') }」`,

Type: 'global',

Disable: foldMenu,

Fn: () => {

Const confirm = window.confirm(configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl'));

If (confirm) {

configManager.setGlobalStorage('enhance.allowCrossOriginControl', ! configManager.getGlobalStorage('enhance.allowCrossOriginControl'));

Window.location.reload();

}

}

},

{

Title: () => `${configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('allowExperimentFeatures')} 「${i18n.t('globalSetting') }」`,

Type: 'global',

Disable: foldMenu,

Fn: () => {

Const confirm = window.confirm(configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('experimentFeaturesWarning'));

If (confirm) {

configManager.setGlobalStorage('enhance.allowExperimentFeatures', ! configManager.get('enhance.allowExperimentFeatures'));

Window.location.reload();

}

}

},

{

Title: () => `${configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration')} "${i18n. t('globalSetting')}」`,

Type: 'global',

Disable: foldMenu,

Fn: () => {

Const confirm = window.confirm(configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration'));

If (confirm) {

configManager.setGlobalStorage('enhance.allowExternalCustomConfiguration', ! configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration'));

Window.location.reload();

}

}

},

{

Title: () => `${configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode')} 「${i18n.t('globalSetting')}」`,

Disable: foldMenu,

Fn: () => {

Const confirm = window.confirm(configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode'));

If (confirm) {

configManager.setGlobalStorage('debug', ! configManager.getGlobalStorage('debug'));

Window.location.reload();

}

}

}

];

Let titlePrefix = '';

If (isInIframe()) {

titlePrefix = `[${location.hostname}]`;

/* Supplementary title prefix */

menus.forEach(menu => {

Const titleFn = menu.title;

If (titleFn instanceof Function && menu.type === 'local') {

Menu.title = () => titlePrefix + titleFn();

}

});

}

addMenu(menus);

t._hasRegisterH5playerMenus_ = true;

}

}

/**

* Agent video player event registration and deregistration functions to debug or block registration events

* @param {*} player

* @returns

*/

Function proxyHTMLMediaElementEvent () {

If (HTMLMediaElement.prototype._rawAddEventListener_) {

Return false

}

HTMLMediaElement.prototype._rawAddEventListener_ = HTMLMediaElement.prototype.addEventListener;

HTMLMediaElement.prototype._rawRemoveEventListener_ = HTMLMediaElement.prototype.removeEventListener ;

HTMLMediaElement.prototype.addEventListener = new Proxy(HTMLMediaElement.prototype.addEventListener, {

Apply (target, ctx, args) {

Const eventName = args[0];

Const listener = args[1];

If (listener instanceof Function && eventName === 'ratechange') {

/* Detect the registered ratechange event, and try to suspend the event if there is abnormal behavior */

Args[1] = new Proxy(listener, {

Apply (target, ctx, args) {

If (ctx) {

/* Block speed regulation detection and carry out anti-blocking */

If (ctx.playbackRate && eventName === 'ratechange') {

If (ctx._hasBlockRatechangeEvent_) {

Return true

}

Const oldRate = ctx.playbackRate;

Const startTime = Date.now();

Const result = target.apply(ctx, args);

/**

* By judging whether the rate has been changed before and after the execution of ratechange,

* And whether there is an extra long execution time (may have an alert pop-up window) to detect whether there may be behavior to prevent speed regulation.

* Other detection methods to be supplemented

*/

Const blockRatechangeBehave1 = oldRate ! == ctx.playbackRate || Date.now() - startTime > 1000;

Const blockRatechangeBehave2 = ctx._setPlaybackRate_ && ctx._setPlaybackRate_.value ! == ctx.playbackRate;

If (blockRatechangeBehave1 || blockRatechangeBehave2) {

debug.info(`[execVideoEvent][${eventName}] detected that there may be behavior to prevent speed regulation, and the execution of the ${eventName} event has been prohibited`, listener);

ctx._hasBlockRatechangeEvent_ = true;

Return true

} else {

Return result

}

}

}

Try {

Return target.apply(ctx, args)

} catch (e) {

debug.error(`[proxyPlayerEvent][${eventName}]`, listener, e);

}

}

});

}

Return target.apply(ctx, args)

}

});

}

/*!

* @name hotkeysRunner.js

* @description hotkey runner to realize hotkey configuration similar to vscode

* @version 0.0.1

* @author xxxily

* @date 2022/11/23 18:22

* @github https://github.com/xxxily

*/

Const Map$1 = window.Map;

Const WeakMap = window.WeakMap;

Function isObj$1 (obj) { return Object.prototype.toString.call(obj) === '[object Object]' }

Function getValByPath$1 (obj, path) {

Path = path || '';

Const pathArr = path.split('.') ;

Let result = obj;

/* Recursive extraction result value */

For (let i = 0; i < pathArr.length; i++) {

If (! Result) break

Result = result[pathArr[i]];

}

Return result

}

Function toArrArgs (args) {

Return Array.isArray(args) ? Args : (typeof args === 'undefined' ? [] : [args])

}

Function isModifierKey (key) {

Return [

'Ctrl', 'controlleft', 'controlright',

'Shift', 'shiftleft', 'shiftright',

'Alt', 'altleft', 'altright',

'Meta', 'metaleft', 'metaright',

'capsLock'].includes(key.toLowerCase())

}

Const keyAlias = {

ControlLeft: 'ctrl',

ControlRight: 'ctrl',

ShiftLeft: 'shift',

ShiftRight: 'shift',

AltLeft: 'alt',

AltRight: 'alt',

MetaLeft: 'meta',

MetaRight: 'meta'

};

Const combinationKeysMonitor = (function () {

Const combinationKeysState = new Map$1();

Const hasInit = new WeakMap();

Function init (win = window) {

If (! Win || win! == win.self || ! win.addEventListener || hasInit.get(win)) {

Return false

}

Const timers = {};

Function activeCombinationKeysState (event) {

isModifierKey(event.code) && combinationKeysState.set(event.code, true);

}

Function inactivateCombinationKeysState (event) {

If (!( Event instanceof KeyboardEvent)) {

combinationKeysState.forEach((val, key) => {

combinationKeysState.set(key, false);

});

Return true

}

/**

* The combinationKeysState state must be retained for a period of time, otherwise when the external definition is a keyup event, because this registration is also executed first,

* Change the combinationKeysState state immediately, which will cause the later defined event to get the status of the inactive key combination.

*/

If (isModifierKey(event.code)) {

clearTimeout(timers[event.code]);

Timers[event.code] = setTimeout(() => { combinationKeysState.set(event.code, false); }, 50);

}

}

win.addEventListener('keydown', activeCombinationKeysState, true);

win.addEventListener('keypress', activeCombinationKeysState, true);

win.addEventListener('keyup', inactivateCombinationKeysState, true);

win.addEventListener('blur', inactivateCombinationKeysState, true);

hasInit.set(win, true);

}

Function getCombinationKeys () {

Const result = new Map$1();

combinationKeysState.forEach((val, key) => {

If (val === true) {

Result.set(key, val);

}

});

Return result

}

Return {

combinationKeysState,

getCombinationKeys,

Init

}

})();

Class HotkeysRunner {

Constructor (hotkeys, win = window) {

This.window = win;

/* The modifiers used by Mac and window are different */

this.MOD = typeof navigator === 'object' && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'Meta' : 'Ctrl';

// 'Control', 'Shift', 'Alt', 'Meta'

this.prevPress = null;

this._prevTimer_ = null;

this.setHotkeys(hotkeys);

combinationKeysMonitor.init(win);

}

/* Set the key combination monitoring logic of other window objects */

setCombinationKeysMonitor (win) {

This.window = win;

combinationKeysMonitor.init(win);

}

/* Data preprocessing */

hotkeysPreprocess (hotkeys) {

If (! Array.isArray(hotkeys)) {

Return false

}

hotkeys.forEach((config) => {

If (! isObj$1(config) || ! Config.key || typeof config.key ! == 'string') {

Return false

}

Const keyName = config.key.trim().toLowerCase();

Const mod = this.MOD.toLowerCase();

/* Add the formatted hotkeys array */

config.keyBindings = keyName.split(' ').map(press => {

Const keys = press.split(/\b\+/);

Const mods = [];

Let key = '';

keys.forEach((k) => {

K = k === '$mod' ? Mod : k;

If (isModifierKey(k)) {

Mods.push(k);

} else {

Key = k;

}

});

Return [mods, key]

});

});

Return hotkeys

}

setHotkeys (hotkeys) {

This.hotkeys = this.hotkeysPreprocess(hotkeys) || [];

}

/**

* Determine whether the currently provided keyboard events match the expected hotkey configuration

* @param {KeyboardEvent} event

* @param {Array} press For example: [['alt', 'shift'], 's']

* @param {Object} prevCombinationKeys

* @returns

*/

isMatch (event, press) {

If (! Event || ! Array.isArray(press)) { return false }

Const combinationKeys = event.combinationKeys || combinationKeysMonitor.getCombinationKeys();

Const mods = press[0];

Const key = press[1];

/* The number of modifiers does not match */

If (mods.length ! == combinationKeys.size) {

Return false

}

/* The currently pressed key does not match the expected key */

If (key && event.key.toLowerCase() ! == key && event.code.toLowerCase() ! == key) {

Return false

}

/* The currently pressed modifier does not match the expected modifier */

Let result = true;

Const modsKey = new Map$1();

combinationKeys.forEach((val, key) => {

/* Supplement the identification of various possible situations */

modsKey.set(key, val);

modsKey.set(key.toLowerCase(), val);

keyAlias[key] && modsKey.set(keyAlias[key], val);

});

mods.forEach((key) => {

If (! modsKey.has(key)) {

Result = false;

}

});

Return result

}

isMatchPrevPress (press) { return this.isMatch(this.prevPress, press) }

Run (opts = {}) {

Const KeyboardEvent = this.window.KeyboardEvent;

If (!( Opts.event instanceof KeyboardEvent)) { return false }

Const event = opts.event;

Const target = opts.target || null;

Const conditionHandler = opts.conditionHandler || opts.whenHandler;

Let matchResult = null;

this.hotkeys.forEach(hotkeyConf => {

If (hotkeyConf.disabled || ! hotkeyConf.keyBindings) {

Return false

}

Let press = hotkeyConf.keyBindings[0];

/* When there is prevPress, it will no longer respond to other shortcut keys that do not match prevPress */

If (this.prevPress && (hotkeyConf.keyBindings.length <= 1 || ! this.isMatchPrevPress(press))) {

Return false

}

/* If there is a record of the previous round of operation shortcut keys, and the previous shortcut key matches the shortcut key defined by the first keyBindings, then match the second keyBindings */

If (this.prevPress && hotkeyConf.keyBindings.length > 1 && this.isMatchPrevPress(press)) {

Press = hotkeyConf.keyBindings[1];

}

Const isMatch = this.isMatch(event, press);

If (! isMatch) { return false }

matchResult = hotkeyConf;

/* Whether to prevent event bubbles and block default events */

Const stopPropagation = opts.stopPropagation || hotkeyConf.stopPropagation;

Const preventDefault = opts.preventDefault || hotkeyConf.preventDefault;

stopPropagation && event.stopPropagation();

preventDefault && event.preventDefault();

/* Record the shortcut key of the last operation, and clear the record of the operation after a period of time */

If (press === hotkeyConf.keyBindings[0] && hotkeyConf.keyBindings.length > 1) {

/* Turn prevPress into an object with event-related fields */

this.prevPress = {

combinationKeys: combinationKeysMonitor.getCombinationKeys(),

Code: event.code,

Key: event.key,

keyCode: event.keyCode,

altKey: event.altKey,

shiftKey: event.shiftKey,

ctrlKey: event.ctrlKey,

metaKey: event.metaKey

};

clearTimeout(this._prevTimer_);

this._prevTimer_ = setTimeout(() => { this.prevPress = null; }, 1000);

Return true

}

/* If the second shortcut key is currently matched, when the forEach loop is over, log out of prevPress immediately and give way to other shortcut keys */

If (hotkeyConf.keyBindings.length > 1 && press ! == hotkeyConf.keyBindings[0]) {

setTimeout(() => { this.prevPress = null; }, 0);

}

/* Execute the function or command corresponding to hotkeyConf.command */

Const args = toArrArgs(hotkeyConf.args);

Let commandFunc = hotkeyConf.command;

If (target && typeof hotkeyConf.command === 'string') {

commandFunc = getValByPath$1(target, hotkeyConf.command);

}

If (!( commandFunc instanceof Function) && target) {

Throw new Error(`[hotkeysRunner] did not find the corresponding function of command: ${hotkeyConf.command}`)

}

If (hotkeyConf.when && conditionHandler instanceof Function) {

Const isMatchCondition = conditionHandler.apply(target, toArrArgs(hotkeyConf.when));

If (isMatchCondition === true) {

commandFunc.apply(target, args);

}

} else {

commandFunc.apply(target, args);

}

});

Return matchResult

}

Binding (opts = {}) {

If (! isObj$1(opts) || ! Array.isArray(opts.hotkeys)) {

Throw new Error('[hotkeysRunner] The parameter provided to binding is incorrect')

}

Opts.el = opts.el || this.window;

Opts.type = opts.type || 'keydown';

Opts.debug && (this.debug = true);

this.setHotkeys(opts.hotkeys);

If (typeof opts.el === 'string') {

Opts.el = document.querySelector(opts.el);

}

opts.el.addEventListener(opts.type, (event) => {

Opts.event = event;

This.run(opts);

}, true);

}

}

/* eslint-disable camelcase */

/**

* @license Copyright 2017 - Chris West - MIT Licensed

* Prototype to easily set the volume (actual and perceived), loudness,

* decibels, and gain value.

* https://cwestblog.com/2017/08/22/web-audio-api-controlling-audio-video-loudness/

*/

Function MediaElementAmplifier (mediaElem) {

This._context = new (window.AudioContext || window.webkitAudioContext)();

This._source = this._context.createMediaElementSource(this._element = mediaElem);

This._source.connect(this._gain = this._context.createGain());

This._gain.connect(this._context.destination);

}

[

'getContext',

'getSource',

'getGain',

'getElement',

[

'getVolume',

Function (opt_getPerceived) {

Return (opt_getPerceived ? this.getLoudness() : 1) * this._element.volume

}

],

[

'setVolume',

Function (value, opt_setPerceived) {

Var volume = value / (opt_setPerceived ? this.getLoudness() : 1);

If (volume > 1) {

this.setLoudness(this.getLoudness() * volume);

Volume = 1;

}

This._element.volume = volume;

}

],

['getGainValue', function () { return this._gain.gain.value }],

['setGainValue', function (value) { this._gain.gain.value = value; }],

['getDecibels', function () { return 20 * Math.log10(this.getGainValue()) }],

['setDecibels', function (value) { this.setGainValue(Math.pow(10, value / 20)); }],

['getLoudness', function () { return Math.pow(2, this.getDecibels() / 10) }],

['setLoudness', function (value) { this.setDecibels(10 * Math.log2(value)); }]

].forEach(function (name, fn) {

If (typeof name === 'string') {

Fn = function () { return this[name.replace('get', '').toLowerCase()] };

} else {

Fn = name[1];

Name = name[0];

}

MediaElementAmplifier.prototype[name] = fn;

});

Function download (url, title) {

Const downloadEl = document.createElement('a');

downloadEl.href = url;

downloadEl.target = '_blank';

downloadEl.download = title;

downloadEl.click();

}

Function mediaDownload (mediaEl, title, downloadType) {

If (mediaEl && (mediaEl.src || mediaEl.currentSrc) && ! mediaEl.src.startsWith('blob:')) {

Const mediaInfo = {

Type: mediaEl instanceof HTMLVideoElement ? 'Video' : 'audio',

Format: mediaEl instanceof HTMLVideoElement ? 'Mp4': 'mp3'

};

Let mediaTitle = `${title || mediaEl.title || document.title || Date.now()}_${mediaInfo.type}.${medi aInfo.format}`;

/**

* When the media contains a source tag, the real address of the media tag will be currentSrc.

* https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentSrc

*/

Const mediaUrl = mediaEl.src || mediaEl.currentSrc;

/* Media files less than 5 minutes, try to download through fetch */

If (downloadType === 'blob' || mediaEl.duration < 60 * 5) {

If (mediaEl.downloading) {

/* If the last download is less than 1s, it will not directly respond to any operation */

If (Date.now() - mediaEl.downloading < 1000 * 1) {

Return false

} else {

Const confirm = original.confirm ('The file is downloading, are you sure to repeat this operation?') ;

If (! Confirm) {

Return false

}

}

}

If (mediaEl.hasDownload) {

Const confirm = original.confirm('The media file has been downloaded, are you sure you need to download it again?') ;

If (! Confirm) {

Return false

}

}

mediaTitle = original.prompt ('Please confirm the file title:', mediaTitle) || mediaTitle;

If (! mediaTitle.endsWith(mediaInfo.format)) {

mediaTitle = mediaTitle + '.' + mediaInfo.format;

}

Let fetchUrl = mediaUrl;

If (mediaUrl.startsWith('http://') && location.href.startsWith('https://')) {

/* fetch http resource in https will cause block:mixed-content error, so try to unify the address to the beginning of https */

fetchUrl = mediaUrl.replace('http://', 'https://');

}

mediaEl.downloading = Date.now();

fetch(fetchUrl).then(res => {

Res.blob().then(blob => {

Const blobUrl = window.URL.createObjectURL(blob);

download(blobUrl, mediaTitle);

mediaEl.hasDownload = true;

Delete mediaEl.downloading;

window.URL.revokeObjectURL(blobUrl);

});

}).Catch(err => {

Original.console.error('fetch download operation failed:', err);

/* Download bottom */

download(mediaUrl, mediaTitle);

});

} else {

download(mediaUrl, mediaTitle);

}

} else if (mediaSource.hasInit()) {

/* Download media files managed through MediaSource */

mediaSource.downloadMediaSource();

} else {

original.alert('The current media file cannot be downloaded, and the download function needs to be optimized and improved');

}

}

/* Define which media tags are supported */

// const supportMediaTags = ['video', 'bwp-video', 'audio']

Const supportMediaTags = ['video', 'bwp-video'];

Let TCC$1 = null;

Const h5Player = {

mediaCore,

mediaPlusApi: null,

mediaSource,

configManager,

/* The font size of the prompt text */

fontSize: 12,

Enable: true,

globalMode: true,

playerInstance: null,

Scale: 1,

Translate: {

X: 0,

Y: 0

},

Rotate: 0,

/* Horizontal mirror flip, 0 or 180 */

rotateY: 0,

/* Vertical mirror flip, 0 or 180 */

rotateX: 0,

defaultTransform: {

Scale: 1,

Translate: {

X: 0,

Y: 0

},

Rotate: 0,

rotateY: 0,

rotateX: 0

},

/* Store the old Transform value */

historyTransform: {},

playbackRate: configManager.get('media.playbackRate'),

Volume: configManager.get('media.volume'),

lastPlaybackRate: 1,

/* Fast forward and fast back step */

skipStep: 5,

/* Observed objects that monitor mouse activity */

mouseObserver: new MouseObserver(),

/* Get an instance of the current player */

Player: function () {

Const t = this;

Let playerInstance = t.playerInstance;

If (! playerInstance) {

Const mediaList = t.getPlayerList();

If (mediaList.length) {

playerInstance = mediaList[mediaList.length - 1];

t.playerInstance = playerInstance;

t.initPlayerInstance(mediaList.length === 1);

}

}

If (playerInstance && ! t.mediaPlusApi) {

t.mediaPlusApi = mediaCore.mediaPlus(playerInstance);

}

Return playerInstance

},

isAudioInstance () {

Return isAudioElement(this.player())

},

/* Multiple video players that may exist on each web page */

getPlayerList: function () {

Const list = mediaCore.mediaElementList || [];

Function findPlayer (context) {

supportMediaTags.forEach(tagName => {

context.querySelectorAll(tagName).forEach(function (player) {

If (player.tagName.toLowerCase() === 'bwp-video') {

/* Identify BWP-VIDEO of Bilibili as HTMLVideoElement */

player.HTMLVideoElement = true;

}

If (isMediaElement(player) && ! List.includes(player)) {

List.push(player);

}

});

});

}

findPlayer(document);

// video encapsulated in shadow dom

If (window._shadowDomList_) {

window._shadowDomList_.forEach(function (shadowRoot) {

findPlayer(shadowRoot);

});

}

Return list

},

getPlayerWrapDom: function () {

Const t = this;

Const player = t.player();

If (! Player) return

Let wrapDom = null;

Const playerBox = player.getBoundingClientRect();

eachParentNode(player, function (parent) {

If (parent === document || ! parent.getBoundingClientRect) return

Const parentBox = parent.getBoundingClientRect();

If (parentBox.width && parentBox.height) {

If (parentBox.width === playerBox.width && parentBox.height === playerBox.height) {

wrapDom = parent;

}

}

});

Return wrapDom

},

/* Mount the window object on the page for debugging */

Async mountToGlobal () {

Try {

Const pageWindow = await getPageWindow();

If (pageWindow) {

pageWindow._h5Player = h5Player || 'null';

If (window.top ! == window) {

pageWindow._h5PlayerInFrame = h5Player || 'null';

}

pageWindow._window = window || '';

Debug.log ('h5Player object has been successfully mounted to the global');

}

} catch (e) {

Debug.error(e);

}

},

/**

* Initialize the player instance

* @param isSingle whether it is a single instance video tag

*/

initPlayerInstance (isSingle) {

Const t = this;

If (! t.playerInstance) return

Const player = t.playerInstance;

t.mediaPlusApi = mediaCore.mediaPlus(player);

t.initPlaybackRate();

t.isFoucs();

t.proxyPlayerInstance(player);

t.unLockPlaybackRate();

t.setPlaybackRate();

t.lockPlaybackRate(1000);

/* Add universal full-screen, web page full-screen api */

player._fullScreen_ = new FullScreen(player);

player._fullPageScreen_ = new FullScreen(player, true);

/* Register the hotkey operator */

t.registerHotkeysRunner();

If (! player._hasCanplayEvent_) {

player.addEventListener('canplay', function (event) {

t.initAutoPlay(player);

});

player._hasCanplayEvent_ = true;

}

/* Relevant synchronization operations when playing */

If (! player._hasPlayerInitEvent_) {

Let setPlaybackRateOnPlayingCount = 0;

player.addEventListener('playing', function (event) {

t.unLockPlaybackRate();

t.setPlaybackRate(null, true);

t.lockPlaybackRate(1000);

/* Synchronous playback volume */

If (configManager.get('enhance.blockSetVolume') === true && event.target.muted === false) {

t.setVolume(configManager.getGlobalStorage('media.volume'), true);

}

/* Prohibit default progress control */

If (configManager.get('enhance.blockSetCurrentTime') === true) {

t.lockCurrentTime();

}

/* Resume playback progress */

t.setPlayProgress(player);

If (setPlaybackRateOnPlayingCount === 0) {

/* Synchronize the previously set playback speed, volume, etc. */

t.unLockPlaybackRate();

t.setPlaybackRate();

t.lockPlaybackRate(1000);

/* Start the playback progress record */

setTimeout(() => {

t.playProgressRecorder(player);

}, 2000);

} else {

t.unLockPlaybackRate();

t.setPlaybackRate(null, true);

t.lockPlaybackRate(1000);

}

setPlaybackRateOnPlayingCount += 1;

});

player._hasPlayerInitEvent_ = true;

}

/* Perform custom initialization operations */

Const taskConf = TCC$1.getTaskConfig();

If (taskConf.init) {

TCC$1.doTask('init', player);

}

/* Register mouse response event */

t.mouseObserver.on(player, 'click', function (event, offset, target) {

// debug.log ('Capture the mouse click event:', event, offset, target)

});

/* Picture-in-picture event monitoring */

player.addEventListener('enterpictureinpicture', () => {

monkeyMsg.send('globalPictureInPictureInfo', {

usePictureInPicture: true

});

Debug.log('enterpictureinpicture', player);

});

player.addEventListener('leavepictureinpicture', () => {

t.leavepictureinpictureTime = Date.now();

monkeyMsg.send('globalPictureInPictureInfo', {

usePictureInPicture: false

});

Debug.log('leavepictureinpicture', player);

});

If (debug.isDebugMode()) {

player.addEventListener('loadeddata', function () {

Debug.log(`video url: ${player.src} video duration: ${player.duration} video dom:`, player);

});

player.addEventListener('durationchange', function () {

Debug.log(`video durationchange: ${player.duration}`);

});

}

},

registerHotkeysRunner () {

If (! this.hotkeysRunner) {

this.hotkeysRunner = new HotkeysRunner(configManager.get('hotkeys'));

If (isInIframe() && ! isInCrossOriginFrame()) {

/* Let the top-level page also listen to the trigger of key combinations */

this.hotkeysRunner.setCombinationKeysMonitor(window.top);

}

}

},

/* Not long after closing the picture-in-picture, cross-TAB control is allowed during this period of time */

isLeavepictureinpictureAwhile () {

Const t = this;

Return t.leavepictureinpictureTime && (Date.now() - t.leavepictureinpictureTime < 1000 * 10)

},

/**

* Agent the method or attribute of the player instance

* @param player

*/

proxyPlayerInstance (player) {

If (! Player) return

/* List of methods or attributes to be proxyed */

Const proxyList = [

'Play',

'Pause'

];

proxyList.forEach(key => {

Const originKey = 'origin_' + key;

If (Reflect.has(player, key) && ! Reflect.has(player, originKey)) {

player[originKey] = player[key];

Const proxy = new Proxy(player[key], {

Apply (target, ctx, args) {

// debug.log(key + 'called')

/* Handle hanging logic */

Const hangUpInfo = player._hangUpInfo_ || {};

Const hangUpDetail = hangUpInfo[key] || hangUpInfo['hangUp_' + key];

Const needHangUp = hangUpDetail && hangUpDetail.timeout >= Date.now();

If (needHangUp) {

Debug.log(key + 'has been suspended, this call will be ignored');

Return false

}

Return target.apply(ctx || player, args)

}

});

Player[key] = proxy;

}

});

If (! player._hangUp_) {

player._hangUpInfo_ = {};

/**

* Hang the call of a function of player

* @param name {String} - required player method or attribute name, the name is written externally, and the method or attribute must be proxyed to be suspended, otherwise it will be an invalid call

* @param timeout {Number} - optional How long to hang, default 200ms

* @private

*/

player._hangUp_ = function (name, timeout) {

Timeout = Number(timeout) || 200;

// debug.log('_hangUp_', name, timeout)

player._hangUpInfo_[name] = {

Timeout: Date.now() + timeout

};

};

/* Cancel the suspension */

player._unHangUp_ = function (name) {

If (player._hangUpInfo_ && player._hangUpInfo_[name]) {

player._hangUpInfo_[name].timeout = Date.now() - 1;

}

};

}

},

/**

* Initialize the autoplay logic

* The autoplay button selector must be configured for autoplay.

*/

initAutoPlay: function (p) {

Const t = this;

Const player = p || t.player();

Const taskConf = TCC$1.getTaskConfig();

/* Register to open the control menu to prohibit automatic playback */

If (taskConf.autoPlay) {

If (configManager.getLocalStorage('media.autoPlay') === null) {

configManager.setLocalStorage('media.autoPlay', true);

}

addMenu({

Title: () => configManager.getLocalStorage('media.autoPlay') ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'),

Fn: () => {

Const confirm = window.confirm(configManager.getLocalStorage('media.autoPlay') ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'));

If (confirm) {

Const autoPlay = configManager.getLocalStorage('media.autoPlay');

If (autoPlay === null) {

alert(i18n.t('configFail'));

} else {

configManager.setLocalStorage('media.autoPlay', ! autoPlay);

}

}

}

});

}

// When polling and retrying, if the instance changes or is in a hidden page, there will be no automatic playback operation.

If (! configManager.get('media.autoPlay') || (! P && t.hasInitAutoPlay) || ! Player || (p && p ! == t.player()) || document.hidden) {

Return false

}

/**

* The element is not in the visual range, and initialization of automatic playback logic is not allowed.

* Due to the inaccurate visual range judgment of elements under iframe, it is also forbidden to initialize automatic playback logic under iframe.

* TODO to be optimized

*/

If (! isInViewPort(player) || isInIframe()) {

Return false

}

If (! taskConf.autoPlay) {

Return false

}

t.hasInitAutoPlay = true;

If (player && taskConf.autoPlay && player.paused) {

TCC$1.doTask('autoPlay');

If (player.paused) {

// Polling retry

If (! player._initAutoPlayCount_) {

player._initAutoPlayCount_ = 1;

}

player._initAutoPlayCount_ += 1;

If (player._initAutoPlayCount_ >= 10) {

Return false

}

setTimeout(function () {

t.initAutoPlay(player);

}, 200);

}

}

},

/* Set up full-screen video */

setFullScreen () {

Const player = this.player();

Const isDo = TCC$1.doTask('fullScreen');

If (! isDo && player && player._fullScreen_) {

player._fullScreen_.toggle();

}

},

/* Full screen of the setting page */

setWebFullScreen: function () {

Const t = this;

Const player = t.player();

Const isDo = TCC$1.doTask('webFullScreen');

If (! isDo && player && player._fullPageScreen_) {

player._fullPageScreen_.toggle();

}

},

initPlaybackRate () {

Const t = this;

t.playbackRate = t.getPlaybackRate();

},

playbackRateInfo: {

lockTimeout: Date.now() - 1,

Time: Date.now(),

/* Before the initialization of playing the actual list, I don't know what the double speed is, so it is set to -1 */

Value: -1

},

getPlaybackRate () {

Let playbackRate = configManager.get('media.playbackRate') || this.playbackRate;

If (isInIframe()) {

Const globalPlaybackRate = configManager.getGlobalStorage('media.playbackRate');

If (globalPlaybackRate) {

playbackRate = globalPlaybackRate;

}

}

Return Number(Number(playbackRate).toFixed(1))

},

/* Lock playbackRate, prohibit speed regulation */

lockPlaybackRate: function (timeout = 200) {

If (this.mediaPlusApi) {

If (configManager.get('enhance.blockSetPlaybackRate') === true) {

// If the operation to lock the external playbackRate is configured, a super-large value will be given directly.

Timeout = 1000 * 60 * 60 * 24 * 365;

}

this.mediaPlusApi.lockPlaybackRate(timeout);

Return true

}

this.playbackRateInfo.lockTimeout = Date.now() + timeout;

},

unLockPlaybackRate: function () {

If (this.mediaPlusApi) {

this.mediaPlusApi.unLockPlaybackRate();

Return true

}

this.playbackRateInfo.lockTimeout = Date.now() - 1;

},

isLockPlaybackRate: function () {

If (this.mediaPlusApi) {

Return this.mediaPlusApi.isLockPlaybackRate()

}

Return Date.now() - this.playbackRateInfo.lockTimeout < 0

},

/* Solve the problem that the audio and picture are not synchronized after frequent switching of high and low speed */

fixPlaybackRate: function (oldPlaybackRate) {

Const t = this;

Const curPlaybackRate = t.getPlaybackRate();

If (Math.abs(curPlaybackRate - oldPlaybackRate) > 1) {

t.setCurrentTimeUp(0.1, true);

}

},

/* Set the playback speed */

setPlaybackRate: function (num, notips, duplicate) {

Const t = this;

Const player = t.player();

If (t.isLockPlaybackRate()) {

Debug.info ('the speed regulation ability has been locked');

Return false

}

If (TCC$1.doTask('playbackRate')) {

// debug.log('[TCC][playbackRate]', 'suc')

Return

}

If (! Player) return

Const oldPlaybackRate = t.getPlaybackRate();

Let curPlaybackRate;

If (num) {

Num = Number(num);

If (Number.isNaN(num)) {

Debug.error('h5player: playback speed conversion error');

Return false

}

If (num <= 0) {

Num = 0.1;

} else if (num > 16) {

Num = 16;

}

Num = Number(num.toFixed(1));

curPlaybackRate = num;

} else {

curPlaybackRate = t.getPlaybackRate();

}

/* Information to record the playback speed */

t.playbackRate = curPlaybackRate;

If (isInIframe()) {

configManager.setGlobalStorage('media.playbackRate', curPlaybackRate);

} else {

configManager.set('media.playbackRate', curPlaybackRate);

}

If (t.mediaPlusApi) {

t.mediaPlusApi.setPlaybackRate(curPlaybackRate);

If (!(! Num && curPlaybackRate === 1) && ! Notips) {

t.tips(i18n.t('tipsMsg.playspeed') + player.playbackRate);

}

/* Synchronize playback speed to all media elements */

Const mediaList = t.getPlayerList();

mediaList.forEach(media => {

If (media ! == player) {

Const mediaPlusApi = mediaCore.mediaPlus(media);

mediaPlusApi && mediaPlusApi.setPlaybackRate(curPlaybackRate);

}

});

t.fixPlaybackRate(oldPlaybackRate);

Return true

}

Delete player.playbackRate;

player.playbackRate = curPlaybackRate;

t.playbackRateInfo.time = Date.now();

t.playbackRateInfo.value = curPlaybackRate;

player._setPlaybackRate_ = {

Time: Date.now(),

Value: curPlaybackRate

};

Try {

Const playbackRateDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playback Rate');

originalMethods.Object.defineProperty.call(Object, player, 'playbackRate', {

Configurable: true,

Get: function () {

/**

* In YouTube, if playbackRateDescriptor.get.apply(player, arguments) is returned, the speed regulation will fluctuate and be abnormal.

* I don't know why for the time being, so I'd better return to curPlaybackRate first.

*/

Return curPlaybackRate || playbackRateDescriptor.get.apply(player, arguments)

},

Set: function (val) {

If (typeof val ! == 'number') {

Return false

}

/* Some websites constantly swipe playbackRate through timers, so unnecessary information output is reduced through timers */

! Number.isInteger(player._blockSetPlaybackRateTips_) && (player._blockSetPlaybackRateTips_ = 0);

If (TCC$1.doTask('blockSetPlaybackRate')) {

player._blockSetPlaybackRateTips_++;

player._blockSetPlaybackRateTips_ < 3 && debug.info ('Speed regulation ability has been processed by customized speed regulation tasks');

Return false

}

If (configManager.get('enhance.blockSetPlaybackRate') === true) {

player._blockSetPlaybackRateTips_++;

player._blockSetPlaybackRateTips_ < 3 && debug.info('Speed regulation ability has been locked by blockSetPlaybackRate');

Return false

} else {

t.setPlaybackRate(val);

}

}

});

} catch (e) {

Debug.error('failed to unlock playbackRate', e);

}

/* It is no longer prompted when it is at 1 times the playback speed */

If (! Num && curPlaybackRate === 1) {

Return true

} else {

! Notips && t.tips(i18n.t('tipsMsg.playspeed') + player.playbackRate);

}

/**

* Repeat the setting to trigger the last double speed

* Solve the problem that YouTube's fast speed regulation does not take effect, and you have to pause and adjust it again to take effect.

*/

If (! Duplicate && configManager.get('enhance.blockSetPlaybackRate') === true) {

clearTimeout(t._setPlaybackRateDuplicate_);

clearTimeout(t._setPlaybackRateDuplicate2_);

Const duplicatePlaybackRate = () => {

t.unLockPlaybackRate();

t.setPlaybackRate(curPlaybackRate, true, true);

t.lockPlaybackRate(1000);

};

t._setPlaybackRateDuplicate_ = setTimeout(duplicatePlaybackRate, 600);

/* If the retrigger is invalid at 600ms, it will be triggered after another 1200ms. If it takes effect after 1200ms, the delay in the speed regulation is very obvious */

t._setPlaybackRateDuplicate2_ = setTimeout(duplicatePlaybackRate, 1200);

}

t.fixPlaybackRate(oldPlaybackRate);

},

/**

* Enhanced version of double speed adjustment, when the same value is set in a short time, it will be considered that a faster jump ability is needed.

* The value of speed regulation will be superimposed and enlarged, so as to achieve the purpose of rapid jump and double speed adjustment.

* It can be used for high-speed fast-forward video advertising, fast-watching at the beginning and end of the film, etc.

* @param {*} num

*/

setPlaybackRatePlus: function (num) {

Num = Number(num);

If (! Num || ! Number.isInteger(num)) {

Return false

}

Const t = this;

t.playbackRatePlusInfo = t.playbackRatePlusInfo || {};

t.playbackRatePlusInfo[num] = t.playbackRatePlusInfo[num] || {

Time: Date.now() - 1000,

Value: num

};

If (Date.now() - t.playbackRatePlusInfo[num].time < 300) {

t.playbackRatePlusInfo[num].value = t.playbackRatePlusInfo[num].value + num;

} else {

t.playbackRatePlusInfo[num].value = num;

}

t.playbackRatePlusInfo[num].time = Date.now();

t.unLockPlaybackRate();

t.setPlaybackRate(t.playbackRatePlusInfo[num].value);

t.lockPlaybackRate(1000);

},

/* Restore the playback speed, restore to 1x speed, or return to the last double speed */

resetPlaybackRate: function (player) {

Const t = this;

Player = player || t.player();

t.unLockPlaybackRate();

Const oldPlaybackRate = Number(player.playbackRate);

Const playbackRate = oldPlaybackRate === 1 ? t.lastPlaybackRate : 1;

If (oldPlaybackRate ! == 1) {

t.lastPlaybackRate = oldPlaybackRate;

}

t.setPlaybackRate(playbackRate);

/* Prevent the interference of external speed regulation logic, so lock it for a period of time */

t.lockPlaybackRate(1000);

},

/* Improve the playback rate */

setPlaybackRateUp (num) {

Num = numUp(num) || 0.1;

If (this.player()) {

this.unLockPlaybackRate();

this.setPlaybackRate(this.player().playbackRate + num);

/* Prevent the interference of external speed regulation logic, so lock it for a period of time */

this.lockPlaybackRate(1000);

}

},

/* Reduce the playback rate */

setPlaybackRateDown (num) {

Num = numDown(num) || -0.1;

If (this.player()) {

this.unLockPlaybackRate();

this.setPlaybackRate(this.player().playbackRate + num);

/* Prevent the interference of external speed regulation logic, so lock it for a period of time */

this.lockPlaybackRate(1000);

}

},

/**

* Control logic to lock the playback progress

* Unlike the locking volume and double speed, the playback progress is closely related to the video instance, so the locking information must be attached to the playback instance.

*/

lockCurrentTime: function (timeout = 200) {

If (this.mediaPlusApi) {

If (configManager.get('enhance.blockSetCurrentTime') === true) {

// If you are configured to lock the external operation of currentTime, you will directly give a super-large value.

Timeout = 1000 * 60 * 60 * 24 * 365;

}

this.mediaPlusApi.lockCurrentTime(timeout);

Return true

}

Const player = this.player();

If (player) {

player.currentTimeInfo = player.currentTimeInfo || {};

player.currentTimeInfo.lockTimeout = Date.now() + timeout;

}

},

unLockCurrentTime: function () {

If (this.mediaPlusApi) {

this.mediaPlusApi.unLockCurrentTime();

Return true

}

Const player = this.player();

If (player) {

player.currentTimeInfo = player.currentTimeInfo || {};

player.currentTimeInfo.lockTimeout = Date.now() - 1;

}

},

isLockCurrentTime: function () {

If (this.mediaPlusApi) {

Return this.mediaPlusApi.isLockCurrentTime()

}

Const player = this.player();

If (player && player.currentTimeInfo && player.currentTimeInfo.lockTimeout) {

Return Date.now() - player.currentTimeInfo.lockTimeout < 0

} else {

Return false

}

},

/* Set the playback progress */

setCurrentTime: function (num) {

If (! Num && num ! == 0) return

Num = Number(num);

Const _num = Math.abs(Number(num.toFixed(1)));

Const t = this;

Const player = t.player();

If (t.isLockCurrentTime()) {

Return false

}

If (TCC$1.doTask('currentTime')) {

// debug.log('[TCC][currentTime]', 'suc')

Return

}

If (this.mediaPlusApi) {

this.mediaPlusApi.setCurrentTime(_num);

Return true

}

Delete player.currentTime;

player.currentTime = _num;

player.currentTimeInfo = player.currentTimeInfo || {};

player.currentTimeInfo.time = Date.now();

player.currentTimeInfo.value = _num;

Try {

Const currentTimeDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTi Me');

originalMethods.Object.defineProperty.call(Object, player, 'currentTime', {

Configurable: true,

Enumerable: true,

Get: function () {

Return currentTimeDescriptor.get.apply(player, arguments)

},

Set: function (val) {

If (typeof val ! == 'number' || TCC$1.doTask('blockSetCurrentTime') || configManager.get('enhance.blockSetCurrentTime ') === true) {

Return false

}

If (t.isLockCurrentTime()) {

Return false

}

player.currentTimeInfo.time = Date.now();

player.currentTimeInfo.value = val;

Return currentTimeDescriptor.set.apply(player, arguments)

}

});

} catch (e) {

Debug.error('failure to unlock currentTime', e);

}

},

setCurrentTimeUp (num, hideTips) {

Num = Number(numUp(num) || this.skipStep);

If (TCC$1.doTask('addCurrentTime')) ; else {

If (this.player()) {

this.unLockCurrentTime();

this.setCurrentTime(this.player().currentTime + num);

/* Prevent interference from external progress control logic, so lock for a period of time */

this.lockCurrentTime(500);

If (! hideTips) {

this.tips(i18n.t('tipsMsg.forward') + num + i18n.t('tipsMsg.seconds'));

}

}

}

},

setCurrentTimeDown (num) {

Num = Number(numDown(num) || -this.skipStep);

If (TCC$1.doTask('subtractCurrentTime')) ; else {

If (this.player()) {

Let currentTime = this.player().currentTime + num;

If (currentTime < 1) {

currentTime = 0;

}

this.unLockCurrentTime();

this.setCurrentTime(currentTime);

/* Prevent interference from external progress control logic, so lock for a period of time */

this.lockCurrentTime(500);

this.tips(i18n.t('tipsMsg.backward') + Math.abs(num) + i18n.t('tipsMsg.seconds'));

}

}

},

volumeInfo: {

lockTimeout: Date.now() - 1,

Time: Date.now(),

/* Uninitialized before playing the actual list, I don't know what the volume is, so set it to -1 */

Value: -1

},

getVolume: function () {

Let volume = configManager.get('media.volume');

If (isInIframe() || configManager.get('enhance.blockSetVolume') === true) {

Const globalVolume = configManager.getGlobalStorage('media.volume');

If (globalVolume! == null) {

Volume = globalVolume;

}

}

Return Number(Number(volume).toFixed(2))

},

/* Lock the volume, no tuning */

lockVolume: function (timeout = 200) {

If (this.mediaPlusApi) {

If (configManager.get('enhance.blockSetVolume') === true) {

// If it is configured to lock the external operation of voluem, it will be directly given a super-large value.

Timeout = 1000 * 60 * 60 * 24 * 365;

}

this.mediaPlusApi.lockVolume(timeout);

Return true

}

this.volumeInfo.lockTimeout = Date.now() + timeout;

},

unLockVolume: function () {

If (this.mediaPlusApi) {

this.mediaPlusApi.unLockVolume();

Return true

}

this.volumeInfo.lockTimeout = Date.now() - 1;

},

isLockVolume: function () {

If (this.mediaPlusApi) {

Return this.mediaPlusApi.isLockVolume()

}

Return Date.now() - this.volumeInfo.lockTimeout < 0

},

/* Set the sound size */

setVolume: function (num, notips, outerCall) {

Const t = this;

Const player = t.player();

If (t.isLockVolume()) {

Return false

}

If (! Num && num ! == 0) {

Num = t.getVolume();

}

Num = Number(num).toFixed(2);

If (num < 0) {

Num = 0;

}

If (num > 1 && configManager.get('enhance.allowAcousticGain')) {

Num = Math.ceil(num);

Try {

Player._amp_ = player._amp_ || new MediaElementAmplifier(player);

} catch (e) {

Num = 1;

debug.error('Media soundness gain logic anomaly', e);

}

/* Maximum limit of gain */

If (num > 6) {

Num = 6;

}

If (! Player._amp_ || ! player._amp_.setLoudness) {

Num = 1;

}

} else if (num > 1) {

Num = 1;

}

/* Record playback volume information */

T.volume = num;

/* Using volume gain logic, the gain volume is not recorded locally stored */

If (num > 1 && player._amp_ && player._amp_.setLoudness) {

player._amp_.setLoudness(num);

If (! outerCall) { player.muted = false; }

! Notips && t.tips(i18n.t('tipsMsg.volume') + parseInt(num * 100) + '%');

Return true

}

If (isInIframe() || configManager.get('enhance.blockSetVolume') === true) {

configManager.setGlobalStorage('media.volume', num);

} else {

configManager.setLocalStorage('media.volume', num);

}

If (t.mediaPlusApi) {

t.mediaPlusApi.setVolume(num);

/* Synchronize the playback volume to all media elements */

Const mediaList = t.getPlayerList();

mediaList.forEach(media => {

If (media ! == player) {

Const mediaPlusApi = mediaCore.mediaPlus(media);

mediaPlusApi && mediaPlusApi.setVolume(num);

}

});

} else {

Delete player.volume;

Player.volume = num;

t.volumeInfo.time = Date.now();

t.volumeInfo.value = num;

Try {

Const volumeDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'volume');

originalMethods.Object.defineProperty.call(Object, player, 'volume', {

Configurable: true,

Get: function () {

Return volumeDescriptor.get.apply(player, arguments)

},

Set: function (val) {

If (typeof val ! == 'number' || val < 0) {

Return false

}

If (TCC$1.doTask('blockSetVolume') || configManager.get('enhance.blockSetVolume') === true) {

Return false

} else {

t.setVolume(val, false, true);

}

}

});

} catch (e) {

Debug.error('unlock volume failed', e);

}

}

/* Turn off the mute mode when adjusting the volume */

If (! outerCall) { player.muted = false; }

! Notips && t.tips(i18n.t('tipsMsg.volume') + parseInt(player.volume * 100) + '%');

},

setVolumeUp (num) {

Num = numUp(num) || 0.2;

Const player = this.player();

If (player) {

this.unLockVolume();

If (this.volume > 1 && player._amp_) {

this.setVolume(this.volume + num);

} else {

this.setVolume(player.volume + num);

}

/* Prevent the interference of external tuning logic, so lock it for a period of time */

this.lockVolume(500);

}

},

setVolumeDown (num) {

Num = numDown(num) || -0.2;

Const player = this.player();

If (player) {

this.unLockVolume();

If (this.volume > 1 && player._amp_) {

this.setVolume(Math.floor(this.volume + num));

} else {

this.setVolume(player.volume + num);

}

/* Prevent the interference of external tuning logic, so lock it for a period of time */

this.lockVolume(500);

}

},

/* Collect the historical change record of the Transform value for subsequent restoration */

collectTransformHistoryInfo () {

Const t = this;

Object.keys(t.defaultTransform).forEach(key => {

If (key === 'translate') {

Const translate = t.defaultTransform.translate;

t.historyTransform.translate = t.historyTransform.translate || {};

Object.keys(translate).forEach(subKey => {

If (Number(t.translate[subKey]) ! == t.defaultTransform.translate[subKey]) {

t.historyTransform.translate[subKey] = t.translate[subKey];

}

});

} else {

If (Number(t[key]) ! == t.defaultTransform[key]) {

t.historyTransform[key] = t[key];

}

}

});

},

/* Determine whether the Transform value under h5Player is consistent with the default Transform value */

isSameAsDefaultTransform () {

Let result = true;

Const t = this;

Object.keys(t.defaultTransform).forEach(key => {

If (isObj(t.defaultTransform[key])) {

Object.keys(t.defaultTransform[key]).forEach(subKey => {

If (Number(t[key][subKey]) ! == t.defaultTransform[key][subKey]) {

Result = false;

}

});

} else {

If (Number(t[key]) ! == t.defaultTransform[key]) {

Result = false;

}

}

});

Return result

},

/* Set the zoom and displacement of the video screen */

setTransform (notTips) {

Const t = this;

Const player = t.player();

Const scale = t.scale = Number(t.scale).toFixed(2);

Const translate = t.translate;

Const mirror = t.rotateX === 180 ? `rotateX(${t.rotateX}deg)` : (t.rotateY === 180 ? `rotateY(${t.rotateY}deg)` : '');

Player.style.transform = `scale(${scale}) translate(${translate.x}px, ${translate.y}px) rotate(${t.r Otate}deg) ${mirror}`;

Let tipsMsg = i18n.t('tipsMsg.videozoom') + `${(scale * 100).toFixed(0)}%`;

If (translate.x) {

tipsMsg += ` ${i18n.t('tipsMsg.horizontal')}${t.translate.x}px`;

}

If (translate.y) {

tipsMsg += ` ${i18n.t('tipsMsg.vertical')}${t.translate.y}px`;

}

If (notTips === true) ; else {

t.collectTransformHistoryInfo();

t.tips(tipsMsg);

}

/* Always keep the transform style normal */

If (! t._transformStateGuard_) {

t._transformStateGuard_ = setInterval(() => {

t.setTransform(true);

}, 300);

}

},

/* Video picture rotation 90 degrees */

setRotate () {

Const t = this;

T.rotate += 90;

If (t.rotate % 360 === 0) t.rotate = 0;

t.setTransform(true);

t.tips(i18n.t('tipsMsg.imgrotate') + t.rotate + '°');

},

/* Set the image flip */

setMirror (vertical = false) {

Const t = this;

Let tipsMsg = '';

If (vertical) {

t.rotateX = t.rotateX === 0 ? 180 : 0;

tipsMsg += ` ${i18n.t('tipsMsg.verticalMirror')} ${t.rotateX}deg`;

} else {

t.rotateY = t.rotateY === 0 ? 180 : 0;

tipsMsg += ` ${i18n.t('tipsMsg.horizontalMirror')} ${t.rotateY}deg`;

}

t.setTransform(true);

t.tips(tipsMsg);

},

/* Zoom the video screen */

setScale (num) {

If (Number.isNaN(this.scale) || Number.isNaN(num)) {

This.scale = 1;

} else {

This.scale = num;

}

this.setTransform();

},

/* Video enlargement +0.1 */

setScaleUp (num) {

Num = numUp(num) || 0.05;

this.setScale(Number(this.scale) + num);

},

/* Video reduction -0.1 */

setScaleDown (num) {

Num = numDown(num) || -0.05;

this.setScale(Number(this.scale) + num);

},

/* Set the displacement property of the video screen */

setTranslate (x, y) {

If (typeof x === 'number') {

This.translate.x = x;

}

If (typeof y === 'number') {

This.translate.y = y;

}

this.setTransform();

},

/* The video picture is shifted to the right */

setTranslateRight (num) {

Num = numUp(num) || 10;

this.setTranslate(this.translate.x + num);

},

/* The video picture is pan to the left */

setTranslateLeft (num) {

Num = numDown(num) || -10;

this.setTranslate(this.translate.x + num);

},

/* The video screen is pan-up */

setTranslateUp (num) {

Num = numUp(num) || 10;

this.setTranslate(null, this.translate.y - num);

},

/* Video screen translation down */

setTranslateDown (num) {

Num = numDown(num) || -10;

this.setTranslate(null, this.translate.y - num);

},

resetTransform (notTips) {

Const t = this;

If (t.isSameAsDefaultTransform() && Object.keys(t.historyTransform).length) {

/* Restore to the Transform value in the history */

Object.keys(t.historyTransform).forEach(key => {

If (isObj(t.historyTransform[key])) {

Object.keys(t.historyTransform[key]).forEach(subKey => {

t[key][subKey] = t.historyTransform[key][subKey];

});

} else {

T[key] = t.historyTransform[key];

}

});

} else {

/* Restore to the default Transform value */

Const defaultTransform = clone(t.defaultTransform);

Object.keys(defaultTransform).forEach(key => {

T[key] = defaultTransform[key];

});

}

t.setTransform(notTips);

},

/**

* Fixed frame screen

* @param perFps {Number} - Optional default 1, that is, freeze to the next frame, if it is -1, freeze to the previous frame

*/

freezeFrame (perFps) {

perFps = perFps || 1;

Const t = this;

Const player = t.player();

/* Jump frame */

player.currentTime += Number(perFps / t.fps);

/* Fixed screen */

If (! Player.paused) player.pause();

/* Some players find that the position of the screen changes and it will play automatically, so they need to hang the playback operation at this time */

player._hangUp_ && player._hangUp_('play', 400);

If (perFps === 1) {

t.tips(i18n.t('tipsMsg.nextframe'));

} else if (perFps === -1) {

t.tips(i18n.t('tipsMsg.previousframe'));

} else {

t.tips(i18n.t('tipsMsg.stopframe') + perFps);

}

},

/**

* Switch the picture-in-picture function

*/

togglePictureInPicture () {

Const player = this.player();

If (window._isPictureInPicture_ && document.pictureInPictureElement) {

document.exitPictureInPicture().then(() => {

window._isPictureInPicture_ = null;

}).Catch((e) => {

window._isPictureInPicture_ = null;

debug.error('[togglePictureInPicture]', e);

});

} else {

player.requestPictureInPicture && player.requestPictureInPicture().then(() => {

window._isPictureInPicture_ = true;

}).Catch((e) => {

window._isPictureInPicture_ = null;

debug.error('[togglePictureInPicture]', e);

});

}

},

/* Play the next video, there is no such function by default. Only when the next field is configured in the TCC will there be this function */

setNextVideo () {

Const isDo = TCC$1.doTask('next');

If (! isDo) {

Debug.log ('The current web page does not support the function of playing the next video with one click~');

}

},

/* Switch playback status */

switchPlayStatus () {

Const t = this;

Const player = t.player();

If (TCC$1.doTask('switchPlayStatus')) {

// debug.log('[TCC][switchPlayStatus]', 'suc')

Return

}

If (player.paused) {

If (TCC$1.doTask('play')) ; else {

If (t.mediaPlusApi) {

t.mediaPlusApi.lockPause(400);

t.mediaPlusApi.applyPlay();

} else {

/* Suspend the pause operation of other logic to ensure that the playback state takes effect */

If (player._hangUp_ instanceof Function) {

player._hangUp_('pause', 400);

player._unHangUp_('play');

}

Player.play();

}

t.tips(i18n.t('tipsMsg.play'));

}

} else {

If (TCC$1.doTask('pause')) ; else {

If (t.mediaPlusApi) {

t.mediaPlusApi.lockPlay(400);

t.mediaPlusApi.applyPause();

} else {

/* Suspend the playback operation of other logic to ensure that the pause state takes effect */

If (player._hangUp_ instanceof Function) {

player._hangUp_('play', 400);

player._unHangUp_('pause');

}

Player.pause();

}

t.tips(i18n.t('tipsMsg.pause'));

}

}

},

isAllowRestorePlayProgress: function () {

Const allowRestoreVal = configManager.get(`media.allowRestorePlayProgress.${window.location.host}`);

Return allowRestoreVal === null || allowRestoreVal

},

/* Switch the state of automatic recovery of playback progress */

switchRestorePlayProgressStatus: function () {

Const t = h5Player;

Let isAllowRestorePlayProgress = t.isAllowRestorePlayProgress();

If (isInCrossOriginFrame()) {

isAllowRestorePlayProgress = false;

} else {

/* Perform value reversal */

isAllowRestorePlayProgress = ! isAllowRestorePlayProgress;

}

configManager.set(`media.allowRestorePlayProgress.${window.location.host}`, isAllowRestorePlayProgre Ss);

/* Operation Tips */

If (isAllowRestorePlayProgress) {

t.tips(i18n.t('tipsMsg.arpl'));

t.setPlayProgress(t.player());

} else {

t.tips(i18n.t('tipsMsg.drpl'));

}

},

tipsClassName: 'html_player_enhance_tips',

getTipsContainer: function (videoEl) {

Const t = h5Player;

Const player = videoEl || t.player();

// There are too many disadvantages of the parent node obtained by using getContainer, so it is temporarily deprecated.

// const _tispContainer_ = player._tispContainer_ || getContainer(player);

Let tispContainer = player.parentNode || player;

/* If the parent node is an element without length and width, then look up to the next level */

Const containerBox = tispContainer.getBoundingClientRect();

If ((! containerBox.width || ! containerBox.height) && tispContainer.parentNode) {

tispContainer = tispContainer.parentNode;

}

Return tispContainer

},

Tips: function (str) {

Const t = h5Player;

Const player = t.player();

If (! Player) {

debug.log('h5Player Tips:', str);

Return true

}

Const isAudio = t.isAudioInstance();

Const parentNode = isAudio ? Document.body : t.getTipsContainer();

If (parentNode === player) {

debug.info('Get tips package container exception:', player, str);

Return false

}

Let backupStyle = '';

If (! isAudio) {

// Fix some abnormal position problems of the prompt button

Const defStyle = parentNode.getAttribute('style') || '';

backupStyle = parentNode.getAttribute('style-backup') || '';

If (! backupStyle) {

Let backupSty = defStyle || 'style-backup: none';

Const backupStyObj = inlineStyleToObj(backupSty);

/**

* Fix the problem of getting the wrong style because of the cache timing

* For example: https://www.xuetangx.com/

*/

If (backupStyObj.opacity === '0') {

backupStyObj.opacity = '1';

}

If (backupStyObj.visibility === 'hidden') {

backupStyObj.visibility = 'visible';

}

backupSty = objToInlineStyle(backupStyObj);

parentNode.setAttribute('style-backup', backupSty);

backupStyle = defStyle;

} else {

/* If defStyle is externally modified, the backup style needs to be updated */

If (defStyle && ! defStyle.includes('style-backup')) {

backupStyle = defStyle;

}

}

Const newStyleArr = backupStyle.split(';');

Const oldPosition = parentNode.getAttribute('def-position') || window.getComputedStyle(parentNode).p Osition;

If (parentNode.getAttribute('def-position') === null) {

parentNode.setAttribute('def-position', oldPosition || '');

}

If (['static', 'inherit', 'initial', 'unset', ''].includes(oldPosition)) {

newStyleArr.push('position: relative');

}

Const playerBox = player.getBoundingClientRect();

Const parentNodeBox = parentNode.getBoundingClientRect();

/* When there is no height and width, give the package node a minimum height and width to ensure that the prompt can be displayed normally */

If (! parentNodeBox.width || ! parentNodeBox.height) {

newStyleArr.push('min-width:' + playerBox.width + 'px');

newStyleArr.push('min-height:' + playerBox.height + 'px');

}

parentNode.setAttribute('style', newStyleArr.join(';'));

Const newPlayerBox = player.getBoundingClientRect();

If (Math.abs(newPlayerBox.height - playerBox.height) > 50) {

parentNode.setAttribute('style', backupStyle);

// debug.info ('After applying the new style, it caused a serious deviation in the height and width of the player, and the style has been restored: ', player, playerBox, newPlayerBox)

}

}

Const tipsSelector = '.' + t.tipsClassName;

/* When multiple tips elements appear, remove all these tips elements */

Const tipsList = document.querySelectorAll(tipsSelector);

If (tipsList.length > 1) {

tipsList.forEach(tipsItem => {

tipsItem.remove();

});

}

Let tipsDom = parentNode.querySelector(tipsSelector);

/* If dom is not initialized, it will be initialized */

If (! tipsDom) {

t.initTips();

tipsDom = parentNode.querySelector(tipsSelector);

If (! tipsDom) {

Debug.log('init h5player tips dom error...') ;

Return false

}

}

Const style = tipsDom.style;

tipsDom.innerText = str;

For (var i = 0; i < 3; i++) {

If (this.on_off[i]) clearTimeout(this.on_off[i]);

}

Function showTips () {

Style.display = 'block';

T.on_off[0] = setTimeout(function () {

Style.opacity = 1;

}, 50);

T.on_off[1] = setTimeout(function () {

// Hide the prompt box and restore the style

Style.opacity = 0;

Style.display = 'none';

If (backupStyle) {

parentNode.setAttribute('style', backupStyle);

}

}, 2000);

}

If (style.display === 'block') {

Style.display = 'none';

clearTimeout(this.on_off[3]);

T.on_off[2] = setTimeout(function () {

showTips();

}, 100);

} else {

showTips();

}

},

/* Set the style of prompt DOM */

initTips: function () {

Const t = h5Player;

Const isAudio = t.isAudioInstance();

Const parentNode = isAudio ? Document.body : t.getTipsContainer();

If (parentNode.querySelector('.' + t.tipsClassName)) return

// top: 50%;

// left: 50%;

// transform: translate(-50%,-50%);

Let tipsStyle = `

Position: absolute;

Z-index: 999999;

Font-size: ${t.fontSize || 16}px;

Padding: 5px 10px;

Background: rgba(0,0,0,0.4);

Color:white;

Top: 0;

Left: 0;

Transition: all 500ms ease;

Opacity: 0;

Border-bottom-right-radius: 5px;

Display: none;

-Webkit-font-smoothing: subpixel-antialiased;

Font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;

-Webkit-user-select: none;

`;

If (isAudio) {

tipsStyle = `

Position: fixed;

Z-index: 999999;

Font-size: ${t.fontSize || 16}px;

Padding: 5px 10px;

Background: rgba(0,0,0,0.4);

Color:white;

Bottom: 0;

Right: 0;

Transition: all 500ms ease;

Opacity: 0;

Border-top-left-radius: 5px;

Display: none;

-Webkit-font-smoothing: subpixel-antialiased;

Font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;

-Webkit-user-select: none;

`;

}

Const tips = document.createElement('div');

tips.setAttribute('style', tipsStyle);

tips.setAttribute('class', t.tipsClassName);

parentNode.appendChild(tips);

},

On_off: new Array(3),

Fps: 30,

/* Filter effect */

Filter: {

Key: [1, 1, 1, 0, 0],

Setup: function () {

Var view = 'brightness({0}) contrast({1}) saturate({2}) hue-rotate({3}deg) blur({4}px)';

For (var i = 0; i < 5; i++) {

View = view.replace('{' + i + '}', String(this.key[i]));

This.key[i] = Number(this.key[i]);

}

h5Player.player().style.filter = view;

},

Reset: function () {

This.key[0] = 1;

This.key[1] = 1;

This.key[2] = 1;

This.key[3] = 0;

This.key[4] = 0;

This.setup();

}

},

setFilter (item, num, isDown) {

If (![ 0, 1, 2, 3, 4].includes(item) || typeof num ! == 'number') {

debug.error('[setFilter]', 'error parameter', item, num);

Return false

}

/* If it is identified as down, the negative value will be automatically taken */

If (isDown === true) {

If (num && num > 0) { num = -num; }

}

Const nameMap = {

0: 'brightness',

1: 'contrast',

2: 'saturation',

3: 'hue',

4: 'blur'

};

Const t = this;

T.filter.key[item] += num || 0.1;

T.filter.key[item] = t.filter.key[item].toFixed(2);

If (t.filter.key[item] < 0 && nameMap[item] ! == 'hue') {

T.filter.key[item] = 0;

}

T.filter.setup();

t.tips(i18n.t(`tipsMsg.${nameMap[item]}`) + parseInt(t.filter.key[item] * 100) + '%');

},

/* Set the brightness of the video */

setBrightness (num) {

this.setFilter(0, num);

},

/* Improve the brightness of the video */

setBrightnessUp (num) {

this.setFilter(0, num || 0.1);

},

/* Reduce the brightness of the video */

setBrightnessDown (num) {

this.setFilter(0, num || -0.1, true);

},

/* Set the contrast ratio of the video */

setContrast (num) {

this.setFilter(1, num);

},

/* Improve the contrast of video */

setContrastUp (num) {

this.setFilter(1, num || 0.1);

},

/* Reduce the contrast of the video */

setContrastDown (num) {

this.setFilter(1, num || -0.1, true);

},

/* Set saturation */

setSaturation (num) {

this.setFilter(2, num);

},

/* Increase saturation */

setSaturationUp (num) {

this.setFilter(2, num || 0.1);

},

/* Reduce saturation */

setSaturationDown (num) {

this.setFilter(2, num || -0.1, true);

},

/* Set the hue */

setHue (num) {

this.setFilter(3, num);

},

/* Increase hue */

setHueUp (num) {

this.setFilter(3, num || 1);

},

/* Reduce hue */

setHueDown (num) {

this.setFilter(3, num || -1, true);

},

/* Set the ambiguity */

setBlur (num) {

this.setFilter(4, num);

},

/* Increase blur */

setBlurUp (num) {

this.setFilter(4, num || 1);

},

/* Reduce ambiguity */

setBlurDown (num) {

this.setFilter(4, num || -1, true);

},

resetFilterAndTransform () {

Const t = this;

t.resetTransform(true);

T.filter.reset();

t.tips(i18n.t('tipsMsg.imgattrreset'));

},

mediaDownload () {

If (configManager.get('enhance.allowExperimentFeatures')) {

debug.warn('[experimentFeatures][mediaDownload]');

mediaDownload(this.player());

}

},

Capture () {

Const player = this.player();

videoCapturer.capture(player, true);

/* Pause the screen */

If (! Player.paused && ! document.pictureInPictureElement && document.visibilityState ! == 'visible') {

this.freezeFrame();

}

},

_isFoucs: false,

/* Focus event of the player */

isFoucs: function () {

Const t = h5Player;

Const player = t.player();

If (! Player) return

Player.onmouseenter = function (e) {

h5Player._isFoucs = true;

};

Player.onmouseleave = function (e) {

h5Player._isFoucs = false;

};

},

/* Player Event Responder */

palyerTrigger: function (player, event) {

If (! Player || ! Event) return

Const t = h5Player;

Const keyCode = event.keyCode;

Const key = event.key.toLowerCase();

If (event.shiftKey && ! event.ctrlKey && ! event.altKey && ! event.metaKey) {

// Full screen of the web page

If (key === 'enter') {

t.setWebFullScreen();

}

// Enter or exit the picture-in-picture mode

If (key === 'p') {

t.togglePictureInPicture();

}

// Screenshot and download and save

If (key === 's') {

T.capture();

}

If (key === 'r') {

t.switchRestorePlayProgressStatus();

}

If (key === 'm') {

/* Vertical mirror flip */

t.setMirror(true);

}

If (key === 'd') {

t.mediaDownload();

}

// Video screen scaling related events

Const allowKeys = ['x', 'c', 'z', 'arrowright', 'arrowleft', 'arrowup', 'arrowdown'];

If (! allowKeys.includes(key)) return

T.scale = Number(t.scale);

Switch (key) {

// shift+X: video reduction -0.1

Case 'x':

t.setScaleDown();

Break

// shift+C: video enlargement +0.1

Case 'c':

t.setScaleUp();

Break

// shift+Z: the video returns to normal size

Case 'z':

t.resetTransform();

Break

Case 'arrowright':

t.setTranslateRight();

Break

Case 'arrowleft':

t.setTranslateLeft();

Break

Case 'arrowup':

t.setTranslateUp();

Break

Case 'arrowdown':

t.setTranslateDown();

Break

}

// Prevent the event from bubbling

event.stopPropagation();

event.preventDefault();

Return true

}

// ctrl+ arrow key right →: fast forward 30 seconds

If (event.ctrlKey && keyCode === 39) {

t.setCurrentTimeUp(t.skipStep * 6);

}

// ctrl + direction key left ←: 30 seconds back

If (event.ctrlKey && keyCode === 37) {

t.setCurrentTimeDown(-t.skipStep * 6);

}

// ctrl + direction keys↑: volume increased by 20%

If (event.ctrlKey && keyCode === 38) {

t.setVolumeUp(0.2);

}

// Under the direction key ↓: reduce the volume by 20%

If (event.ctrlKey && keyCode === 40) {

t.setVolumeDown(-0.2);

}

// Prevent other irrelevant key combinations from conflicts

If (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) return

// Right direction key →: Fast forward 5 seconds

If (keyCode === 39) {

t.setCurrentTimeUp();

}

// Arrow keys left ←: step back 5 seconds

If (keyCode === 37) {

t.setCurrentTimeDown();

}

//↑ on the arrow keys: the volume is increased by 10%

If (keyCode === 38) {

t.setVolumeUp(0.05);

}

// Under the arrow keys ↓: reduce the volume by 10%

If (keyCode === 40) {

t.setVolumeDown(-0.05);

}

// Space bar: pause/play

If (keyCode === 32) {

t.switchPlayStatus();

}

// Key X: Slow down playback -0.1

If (keyCode === 88) {

t.setPlaybackRateDown();

}

// Key C: Accelerate playback +0.1

If (keyCode === 67) {

t.setPlaybackRateUp();

}

// Press Z: Play at normal speed

If (keyCode === 90) {

t.resetPlaybackRate();

}

// Press 1-4 to set the playback speed 49-52;97-100

If ((keyCode >= 49 && keyCode <= 52) || (keyCode >= 97 && keyCode <= 100)) {

t.setPlaybackRatePlus(event.key);

}

// Key F: Next frame

If (keyCode === 70) {

t.freezeFrame(1);

}

// Key D: Previous frame

If (keyCode === 68) {

t.freezeFrame(-1);

}

// Key E: Brightness increased by %

If (keyCode === 69) {

t.setBrightnessUp();

}

// Key W: Brightness reduced by %

If (keyCode === 87) {

t.setBrightnessDown();

}

// Key T: Contrast increased by %

If (keyCode === 84) {

t.setContrastUp();

}

// Key R: Decreased contrast by %

If (keyCode === 82) {

t.setContrastDown();

}

// Key U: Saturation increased by %

If (keyCode === 85) {

t.setSaturationUp();

}

// Key Y: Saturation reduced by %

If (keyCode === 89) {

t.setSaturationDown();

}

// Key O: The hue is increased by 1 degree

If (keyCode === 79) {

t.setHueUp();

}

// Key I: The hue is reduced by 1 degree

If (keyCode === 73) {

t.setHueDown();

}

// Key K: blur increased by 1 px

If (keyCode === 75) {

t.setBlurUp();

}

// Key J: Blur reduction by 1 px

If (keyCode === 74) {

t.setBlurDown();

}

// Key Q: Image reset

If (keyCode === 81) {

t.resetFilterAndTransform();

}

// Key S: The screen rotates 90 degrees

If (keyCode === 83) {

t.setRotate();

}

/* Horizontal mirror flip */

If (keyCode === 77) {

t.setMirror();

}

// Press Enter to enter the full screen

If (keyCode === 13) {

t.setFullScreen();

}

If (key === 'n') {

t.setNextVideo();

}

// Prevent the event from bubbling

event.stopPropagation();

event.preventDefault();

Return true

},

/* Run a custom shortcut key operation, if it is run, it will return true */

runCustomShortcuts: function (player, event) {

If (! Player || ! Event) return

Const key = event.key.toLowerCase();

Const taskConf = TCC$1.getTaskConfig();

Const confIsCorrect = isObj(taskConf.shortcuts) &&

Array.isArray(taskConf.shortcuts.register) &&

taskConf.shortcuts.callback instanceof Function;

/* Determine whether the currently triggered shortcut key has been registered */

Function isRegister () {

Const list = taskConf.shortcuts.register;

/* The currently triggered key combination */

Const combineKey = [];

If (event.ctrlKey) {

combineKey.push('ctrl');

}

If (event.shiftKey) {

combineKey.push('shift');

}

If (event.altKey) {

combineKey.push('alt');

}

If (event.metaKey) {

combineKey.push('command');

}

combineKey.push(key);

/* Use the loop to determine whether the currently triggered key combination and the registered key combination are exactly the same */

Let hasReg = false;

list.forEach((shortcut) => {

Const regKey = shortcut.split('+');

If (combineKey.length === regKey.length) {

Let allMatch = true;

regKey.forEach((key) => {

If (! combineKey.includes(key)) {

allMatch = false;

}

});

If (allMatch) {

hasReg = true;

}

}

});

Return hasReg

}

If (confIsCorrect && isRegister()) {

// Perform custom shortcut key operations

Const isDo = TCC$1.doTask('shortcuts', {

Event,

Player,

h5Player

});

If (isDo) {

event.stopPropagation();

event.preventDefault();

}

Return isDo

} else {

Return false

}

},

/* Key response method */

keydownEvent: function (event) {

Const t = h5Player;

Const keyCode = event.keyCode;

// const key = event.key.toLowerCase()

Const player = t.player();

/* Do not execute any shortcut keys in an editable element */

Const target = event.composedPath ? event.composedPath()[0] || event.target : event.target;

If (isEditableTarget(target)) return

/* Broadcast key messages for cross-domain control */

monkeyMsg.send('globalKeydownEvent', event, 0);

If (! Player) {

If (t.hasCrossOriginVideoDetected) {

If (! configManager.get('enhance.allowCrossOriginControl')) {

Return false

}

/**

* Use the matching ability of the hotkey runner to decide whether to prohibit event bubbling and block the default event

* Solve the problem of abnormal response of other default shortcut keys when in cross-TAB and cross-domain control

*/

If (t.hotkeysRunner && t.hotkeysRunner.run) {

t.hotkeysRunner.run({

Event,

stopPropagation: true,

preventDefault: true

});

} else {

t.registerHotkeysRunner();

event.stopPropagation();

event.preventDefault();

}

// debug.log ('Cross-domain restricted videos are detected on the current page, and default events and event bubbles still need to be prevented')

}

// debug.log ('No available media elements, no related operations')

Return false

}

/* Switch the available status of the plug-in */

If (event.ctrlKey && keyCode === 32) {

T.enable = ! T.enable;

If (t.enable) {

t.tips(i18n.t('tipsMsg.onplugin'));

} else {

t.tips(i18n.t('tipsMsg.offplugin'));

}

}

If (! T.enable) {

debug.log('h5Player has been disabled~');

Return false

}

// Press ctrl+\ to enter the focus or unfocus state for scenes where video tags are blocked

If (event.ctrlKey && keyCode === 220) {

t.globalMode = ! t.globalMode;

If (t.globalMode) {

t.tips(i18n.t('tipsMsg.globalmode') + ' ON');

} else {

t.tips(i18n.t('tipsMsg.globalmode') + ' OFF');

}

}

/* In non- global mode, if there is no focus, the operation of shortcut keys will not be executed */

If (! t.globalMode && ! t._isFoucs) return

/* Determine whether a custom shortcut key operation has been performed, and if so, it will no longer respond to the default definition operation later */

If (t.runCustomShortcuts(player, event) === true) return

/* The hotkey runner matches the relevant execution task and does not execute the subsequent palyerTrigger */

If (t.hotkeysRunner && t.hotkeysRunner.run) {

Const matchResult = t.hotkeysRunner.run({

Event,

Target: t,

stopPropagation: true,

preventDefault: true,

conditionHandler (condition) {

// TODO Perfect Conditional Limited Callback Logic

If (condition) {

Return true

}

}

});

If (matchResult) {

debug.info('[hotkeysRunner][matchResult]', matchResult);

Return true

}

} else {

/* Unusable keys do not monitor any events */

If (! isRegisterKey(event)) { return false }

/* Response to player-related operations */

t.palyerTrigger(player, event);

}

},

/**

* Get the playback progress

* @param player - optional corresponding h5 player object. If you don't pass it, you will get the entire playback schedule, and if you pass it, you will get the playback progress of the current player.

*/

getPlayProgress: function (player) {

Const progressMap = configManager.get('media.progress') || {};

If (! Player) {

Return progressMap

} else {

Const keyName = window.location.href + player.duration;

If (progressMap[keyName]) {

/* For the live video stream, there will be an inconsistency between the recorded duration and the current video duration. At this time, the playback progress will be ignored by returning to the currentTime */

If (Number.isNaN(Number(player.duration)) || Number(progressMap[keyName].duration) ! == Number(player.duration)) {

Return player.currentTime

} else {

Return progressMap[keyName].progress

}

} else {

Return player.currentTime

}

}

},

/* Play progress recorder */

playProgressRecorder: function (player) {

Const t = h5Player;

clearTimeout(player._playProgressTimer_);

Function recorder (player) {

player._playProgressTimer_ = setTimeout(function () {

/* Videos less than two minutes do not record the playback progress */

Const isToShort = ! Player.duration || Number.isNaN(Number(player.duration)) || player.duration < 120;

Const isLeave = document.visibilityState ! == 'visible' && player.paused;

If (! t.isAllowRestorePlayProgress() || isToShort || isLeave) {

Recorder(player);

Return true

}

Const progressMap = t.getPlayProgress() || {};

Const list = Object.keys(progressMap);

Const keyName = window.location.href + player.duration;

/**

* Mark the value recorded to the progressMap for the first time

* Used to prevent the wrong recovery logic from being executed when manually switching the playback progress

*/

If (! progressMap[keyName]) {

t._firstProgressRecord_ = keyName;

t._hasRestorePlayProgress_ = keyName;

}

/* Only save the playback progress of the last 10 videos */

If (list.length > 10) {

/* According to the updated timestamp, take out the earliest record item to add playback progress */

Let timeList = [];

list.forEach(function (keyName) {

progressMap[keyName] && progressMap[keyName].t && timeList.push(progressMap[keyName].t);

});

timeList = quickSort(timeList);

Const timestamp = timeList[0];

/* Delete the earliest added record items */

list.forEach(function (keyName) {

If (progressMap[keyName].t === timestamp) {

Delete progressMap[keyName];

}

});

}

/* Record the current playback progress */

progressMap[keyName] = {

Progress: player.currentTime,

Duration: player.duration,

T: new Date().getTime()

};

/* Save the playback schedule */

configManager.setLocalStorage('media.progress', progressMap);

/* Loop listening */

Recorder(player);

}, 1000 * 2);

}

Recorder(player);

},

/* Set the playback progress */

setPlayProgress: function (player) {

Const t = h5Player;

If (! Player || ! Player.duration || Number.isNaN(player.duration)) return

Const curTime = Number(t.getPlayProgress(player));

/* The time to restore the progress is too small or greater than player.duration is not in line with the specification, and the progress recovery operation is not carried out */

If (! curTime || Number.isNaN(curTime) || curTime < 10 || curTime >= player.duration) return

/* Ignore the situation that the recovery progress time is not much different from the current playback progress time */

If (Math.abs(curTime - player.currentTime) < 2) {

Return false

}

Const progressKey = window.location.href + player.duration;

t._hasRestorePlayProgress_ = t._hasRestorePlayProgress_ || '';

If (t._hasRestorePlayProgress_ === progressKey || t._firstProgressRecord_ === progressKey) {

If (t._hasRestorePlayProgress_ === progressKey) {

t._firstProgressRecord_ = '';

}

Return false

}

If (t.isAllowRestorePlayProgress()) {

// 1.5s less than curTime can let the user know that it is the front picture, so that there is a sense of connection.

player.currentTime = curTime - 1.5;

t._hasRestorePlayProgress_ = progressKey;

t.tips(i18n.t('tipsMsg.playbackrestored'));

} else {

t.tips(i18n.t('tipsMsg.playbackrestoreoff'));

}

},

setPlayerInstance (el) {

If (! El && ! el.getBoundingClientRect) {

Return false

}

Const t = h5Player;

If (t.player() === el) {

Return false

}

If (! t.playerInstance && isMediaElement(el)) {

t.playerInstance = el;

t.initPlayerInstance(false);

Return true

}

If (isVideoElement(el)) {

Const elParentNode = t.getTipsContainer(el);

Const elInfo = el.getBoundingClientRect();

Const parentElInfo = elParentNode && elParentNode.getBoundingClientRect();

If (elInfo && elInfo.width > 200 && parentElInfo && parentElInfo.width > 200) {

t.playerInstance = el;

t.initPlayerInstance(false);

}

} else if (isAudioElement(el)) {

If (isAudioElement(t.playerInstance) || (isVideoElement(t.playerInstance) && ! t.playerInstance.isConnected)) {

t.playerInstance = el;

t.initPlayerInstance(false);

}

}

},

/**

* Whether the video element appears in the viewing port is used to optimize the instance switching of multi-video instances.

* https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API

*/

intersectionObserver: new IntersectionObserver(function (entries, observer) {

Const t = h5Player;

// debug.log('[intersectionObserver]', entries)

Let tmpIntersectionRatio = 0;

entries.forEach(entrie => {

entrie.target._intersectionInfo_ = entrie;

If (entrie.intersectionRatio > tmpIntersectionRatio && entrie.intersectionRatio > 0.4) {

tmpIntersectionRatio = entrie.intersectionRatio;

Const oldPlayer = t.player();

If (oldPlayer && oldPlayer._intersectionInfo_ && tmpIntersectionRatio < oldPlayer._intersectionInfo_ .intersectionRatio) {

/* If the view range of the new instance is smaller than the old one, the instance will not be switched */

Return

}

/* Switch video examples */

Const toggleResult = t.setPlayerInstance(entrie.target);

toggleResult && debug.log('[intersectionObserver] switch video instance', entrie);

}

});

}, {

Threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

}),

/**

* Detect the existence of h5 player

* @param callback

*/

detecH5Player: function () {

Const t = this;

Const playerList = t.getPlayerList();

If (playerList.length) {

// debug.log('HTML5 video detected!', location.href, h5Player, playerList)

/* The situation of single video instance label */

If (playerList.length === 1) {

t.playerInstance = playerList[0];

t.initPlayerInstance(true);

}

/* The situation of multi-video instance tags */

playerList.forEach(function (player) {

/* Reassign the instance when the mouse moves over it */

If (! player._hasMouseRedirectEvent_) {

player.addEventListener('mouseenter', function (event) {

t.setPlayerInstance(event.target);

});

player._hasMouseRedirectEvent_ = true;

}

/* Re-point to the instance when the player starts playing */

If (! player._hasPlayingRedirectEvent_) {

player.addEventListener('playing', function (event) {

Const media = event.target;

/* For ultra-short audio and video, it may be a special effect of some operation feedback, which can be ignored to switch playback instances */

If (media.duration && media.duration < 8) {

Return false

}

t.setPlayerInstance(media);

});

player._hasPlayingRedirectEvent_ = true;

}

/* When it is observed to appear in the browser's viewport, switch the video instance */

If (! player._hasIntersectionObserver_) {

t.intersectionObserver.observe(player);

player._hasIntersectionObserver_ = true;

}

});

If (isInCrossOriginFrame()) {

/* Broadcast detects H5Player's message */

monkeyMsg.send('videoDetected', {

Src: t.playerInstance.src

});

}

registerH5playerMenus(h5Player);

}

},

/* Respond to broadcasts from key messages */

bindFakeEvent () {

Const t = this;

If (t._hasBindFakeEvent_) return

/* Trigger simulation events from message broadcasting to achieve cross-domain and cross-tab control of video playback */

Let triggerFakeEvent = function (name, oldVal, newVal, remote) {

Const player = t.player();

If (player) {

Const fakeEvent = newVal.data;

fakeEvent.stopPropagation = () => { };

fakeEvent.preventDefault = () => { };

t.palyerTrigger(player, fakeEvent);

Debug.log ('responsed to cross-tab/cross-domain key control information: ', newVal);

}

};

/**

* Operate throtttling control to reduce the frequency of key messages,

* Note that after turning on the throttling control, the composite button (e.g. shift+s) will not take effect.

*/

If (! crossTabCtl.hasOpenPictureInPicture() && ! t.hasCrossOriginVideoDetected) {

triggerFakeEvent = throttle(triggerFakeEvent, 80);

}

/* Register an event that responds to the broadcast from the key message */

monkeyMsg.on('globalKeydownEvent', async (name, oldVal, newVal, remote) => {

If (remote) {

If (isInCrossOriginFrame()) {

/**

* Cross-domain restricted pages in the same place, and they are all visible, most likely to be in the same Tab tag, but not 100%

* If the tabId is consistent, it will be 100% under the same label.

*/

If (document.visibilityState === 'visible' && newVal.originTab) {

triggerFakeEvent(name, oldVal, newVal, remote);

}

} else if (crossTabCtl.hasOpenPictureInPicture()) {

/* Cross-Tab control video playback in picture-in-picture */

If (! newVal.originTab && (document.pictureInPictureElement || t.isLeavepictureinpictureAwhile())) {

triggerFakeEvent(name, oldVal, newVal, remote);

}

}

}

});

t._hasBindFakeEvent_ = true;

},

/* Binding related events */

bindEvent: function () {

Const t = this;

If (t._hasBindEvent_) return

document.removeEventListener('keydown', t.keydownEvent);

document.addEventListener('keydown', t.keydownEvent, true);

/* Compatible with iframe operations */

If (isInIframe() && ! isInCrossOriginFrame()) {

window.top.document.removeEventListener('keydown', t.keydownEvent);

window.top.document.addEventListener('keydown', t.keydownEvent, true);

}

t._hasBindEvent_ = true;

},

setCustomConfiguration (config, tag = 'Default') {

If (! Config) return false

Const configuration = configManager.mergeDefConf(config.customConfiguration);

Const taskConf = mergeTaskConf(config.customTaskControlCenter);

If (TCC$1 && TCC$1.setTaskConf) {

TCC$1.setTaskConf(taskConf);

}

h5Player.hasSetCustomConfiguration = tag;

debug.info(`[CustomConfiguration][${tag}]`, configuration, taskConf);

},

mergeExternalConfiguration (config, tag = 'Default') {

If (! Config || ! configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration')) return false

h5Player.setCustomConfiguration(config, 'External');

h5Player.hasExternalCustomConfiguration = tag;

},

Init: function (global) {

Var t = this;

If (window.unsafeWindow && window.unsafeWindow.__h5PlayerCustomConfiguration__) {

! t.hasExternalCustomConfiguration && t.mergeExternalConfiguration(window.unsafeWindow.__h5PlayerCusto mConfiguration__);

}

If (TCC$1 && TCC$1.doTask('disable') === true) {

debug.info(`[TCC][disable][${location.host}] has been banned from running video detection logic on this website. You can view the relevant configuration of the task configuration center for details`);

Return true

}

If (! configManager.get('enable')) {

Debug.info(`[config][disable][${location.host}] The script has been disabled on the current website. If you want to enable the script, please open it in the menu`);

Return true

}

If (! Global) {

/* Detect the presence of H5 player */

t.detecH5Player();

Return true

}

If (configManager.get('debug') === true) {

window._debugMode_ = true;

t.mountToGlobal();

}

setFakeUA();

/* Initialize the task configuration center */

TCC$1 = h5PlayerTccInit(t);

/* Binding Keyboard Event */

t.bindEvent();

t.bindFakeEvent();

/* Respond to video detection events from cross-domain restrictions */

monkeyMsg.on('videoDetected', async (name, oldVal, newVal, remote) => {

If (newVal.originTab) {

t.hasCrossOriginVideoDetected = true;

}

debug.log('[hasCrossOriginVideoDetected]', t, name, oldVal, newVal, remote);

});

/* When the page is in a visual state, initialize the custom playback logic */

document.addEventListener('visibilitychange', function () {

h5Player.initAutoPlay();

});

If (window.unsafeWindow && configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration' )) {

window.unsafeWindow.__setH5PlayerCustomConfiguration__ = t.mergeExternalConfiguration;

}

}

};

Async function h5PlayerInit () {

Try {

mediaCore.init(function (mediaElement) {

// debug.log('[mediaCore][mediaChecker]', mediaElement)

h5Player.init();

});

If (configManager.get('enhance.allowExperimentFeatures')) {

mediaSource.init();

debug.warn(`[experimentFeatures][warning] ${i18n.t('experimentFeaturesWarning')}`);

debug.warn('[experimentFeatures][mediaSource][activated]');

}

/* It is forbidden to lock attributes such as playbackRate */

hackDefineProperty();

// if (! Location.host.includes('bilibili')) {}

/* Prohibit the use of close mode for shadowdom */

hackAttachShadow();

/* Take over all incidents */

proxyHTMLMediaElementEvent();

// hackEventListener()

} catch (e) {

Console.error('h5player hack error', e);

}

menuRegister();

Try {

/* Relevant methods required for global initialization */

h5Player.init(true);

/* Initialize if a video tag is detected */

supportMediaTags.forEach(tagName => {

ready(tagName, function () {

h5Player.init();

});

});

/* Detect the video under shadow dom */

document.addEventListener('addShadowRoot', function (e) {

Const shadowRoot = e.detail.shadowRoot;

supportMediaTags.forEach(tagName => {

ready(tagName, function (element) {

h5Player.init();

}, shadowRoot);

});

});

/* Initialize cross-Tab control logic */

crossTabCtl.init();

If (isInIframe()) {

debug.log('h5Player init suc, in iframe:', window, window.location.href);

} else {

debug.log('h5Player init suc', window, h5Player);

}

If (isInCrossOriginFrame()) {

Debug.log ('Currently in a cross-domain restricted iframe, some functions of h5Player may not be turned on properly', window.location.href);

}

} catch (e) {

debug.error('h5Player init fail', e);

}

}

Function init (retryCount = 0) {

If (! Window.document || ! window.document.documentElement) {

setTimeout(() => {

If (retryCount < 200) {

init(retryCount + 1);

} else {

Console.error('[h5player message:]', 'not documentElement detected!', window);

}

}, 10);

Return false

} else if (retryCount > 0) {

Console.warn('[h5player message:]', 'documentElement detected!', retryCount, window);

}

h5PlayerInit();

}

/**

* In some extreme cases, direct access to the window object will cause an error, so the whole init will try.

* For example: www.icourse163.org has a certain probability of abnormality.

*/

Let initTryCount = 0;

Try {

Init(0);

} catch (e) {

setTimeout(() => {

If (initTryCount < 200) {

initTryCount++;

Init(0);

Console.error('[h5player message:]', 'init error', initTryCount, e);

}

}, 10);

}