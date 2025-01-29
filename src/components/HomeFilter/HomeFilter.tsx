import { Button, Collapse } from "antd"
import { FilterOutlined } from "@ant-design/icons"
import { buttons } from "@/constants/HomePage"
import { IHomeFilter, TFilter } from "@/types/home"

interface IHomeFilterProps {
  filter: IHomeFilter
  setFilter: (e: IHomeFilter) => void
}

export const HomeFilter = ({ filter, setFilter }: IHomeFilterProps) => {
  const handleType = (name: TFilter) => {
    if (name === filter?.type) return "primary"
    else return "default"
  }

  return (
    <>
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
    </>
  )
}
