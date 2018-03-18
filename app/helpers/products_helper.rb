module ProductsHelper
  def main_search
    if params[:search]
      url = "http://api.walmartlabs.com/v1/search?query=" + params[:search] + "&format=json&apiKey=j8r9x93neqeftwg6c8ufxgd2"
      items = HTTParty.get(url).parsed_response['items']
      items = items.map { |item| {name: item['name'], 
        image: item['imageEntities'].first['mediumImage'],
        price: item['salePrice'] ? (sprintf('%0.2f', item['salePrice'])) : nil,
        msrp: item['msrp'] ? (sprintf('%0.2f',item['msrp'])) : nil,
        id: item['itemId'] }}
    end
  end


  def capitalize_search
    params[:search].split.map(&:capitalize).join(' ')
  end
end
