import { Button, Collapse } from "antd"
import { FilterOutlined } from "@ant-design/icons"
import { buttons } from "@/constants/HomePage"
import { IHomeFilterProps } from "./types"
import { TFilter } from "@/types/home"

export const HomeFilter = ({ filter, setFilter }: IHomeFilterProps) => {
  const handleType = (name: TFilter) => {
    if (name === filter?.type) return "primary"
    else return "default"
  }

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-2 w-full px-4 lg:px-8 xl:px-16 2xl:px-[256px]">
      <Collapse
        className="w-full text-center md:hidden"
        bordered={false}
        items={[
          {
            label: (
              <div className="flex items-center justify-center gap-2">
                <FilterOutlined type="message" />
                <p>Filtros</p>
              </div>
            ),
            showArrow: false,
            children: (
              <>
                {buttons?.map((e) => {
                  return (
                    <Button
                      key={e}
                      htmlType={"button"}
                      type={handleType(e)}
                      onClick={() =>
                        setFilter({ ...filter, type: e, sort: filter.sort })
                      }
                      className="uppercase font-semibold w-full  rounded-none py-4 md:py-8"
                    >
                      {e === "ALL" ? "Todos os produtos" : e}
                    </Button>
                  )
                })}
              </>
            ),
          },
        ]}
      />
      {buttons?.map((e) => {
        return (
          <Button
            key={e}
            htmlType={"button"}
            type={handleType(e)}
            onClick={() => setFilter({ ...filter, type: e, sort: filter.sort })}
            className="uppercase font-semibold w-full hidden md:flex rounded-none py-4 md:py-8"
          >
            {e === "ALL" ? "Todos os produtos" : e}
          </Button>
        )
      })}
    </div>
  )
}
